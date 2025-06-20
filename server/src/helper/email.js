const nodemailer = require('nodemailer');
const { smtpUsername, smtpPassword } = require('../secret');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
})

const emailWithNodeMailer = (emailData) => {
  
}

module.exports = emailWithNodeMailer;
