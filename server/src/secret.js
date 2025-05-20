require("dotenv").config();
const port = process.env.SERVER_PORT;
const mongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/E-Commerce';

module.exports = {port, mongodbURL};