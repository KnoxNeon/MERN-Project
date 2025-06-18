require("dotenv").config();
const port = process.env.SERVER_PORT;
const mongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/E-Commerce';
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/4530368-200.png';
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || 'jEFBJEBNFGShnkdnfneqfik';
const smtpUsername = process.env.SMTP_USERNAME || '';
const smtpPassword = process.env.SMTP_PASSWORD || '';
const clientURL = process.env.CLIENT_URL || '';

module.exports = {
    port,
    mongodbURL,
    defaultImagePath,
    jwtActivationKey,
    smtpUsername,
    smtpPassword,
    clientURL
};