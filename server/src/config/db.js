const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");
const connectDataBase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbURL, options);
        console.log("connection to DB is Successful");

        mongoose.connection.on('error', (error) => {
            console.error('DB connection error: ', error);

        });
    } catch (error) {
        console.error('Could not connect to DB: ', error.toString());

    }

};

module.exports = connectDataBase;
