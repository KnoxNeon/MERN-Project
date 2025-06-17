require("dotenv").config();
const port = process.env.SERVER_PORT;
const mongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/E-Commerce';
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/4530368-200.png'; 
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || 'jEFBJEBNFGShnkdnfneqfik';

module.exports = {port, mongodbURL, defaultImagePath, jwtActivationKey};