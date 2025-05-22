const createError = require('http-errors');
const User = require('../models/userModel');


const getUsers = async (req, res, next) => {
    try {
        const search = req.query.search || "";
        const page = Number(req.query.page) || 1;
        const limit= Number(req.query.limit) || 5;

        const searchRegExp = new RegExp('.*' + search + '.*', 'i');

        const filter = {
            isAdmin: {$ne: true},
            $or: [
                {name: {$regex: searchRegExp}},
                {email: {$regex: searchRegExp}},
                {phone: {$regex: searchRegExp}},
            ]
        };

        const users = await User.find(filter)
        res.status(200).send({
            message: 'users were returned',
            users,
        });
    } catch (error) {
        next(error)
    }
};

module.exports = {getUsers};