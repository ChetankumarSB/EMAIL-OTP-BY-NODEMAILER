//imports
const nodemailer = require('nodemailer');

//initializations
const mailConfig = {
  service: 'gmail',
  auth: {
    user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM', // Replace with your email address
    pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD' // Replace with your generated password
  }
};

const transporter = nodemailer.createTransport(mailConfig);

var randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(randomNum); // Print the generated OTP

const mailDetails = {
  from: 'SENDER-ADDRESS@YOURDOMAIN.COM', // Replace with the sender's email address
  to: 'RECEIVERS-ADDRESS@YOURDOMAIN.COM', // Replace with the recipient's email address
  subject: 'Your OTP for App',
  html: `<p>Dear User,</p>
  <p>Thank you for using our service. As requested, here is your One-Time Password:</p>
  <h2><strong>${randomNum}</strong></h2>
  <p>Please use this OTP within the specified time limit to complete your authentication or transaction. Do not share this OTP with anyone, as it is valid for a single use only.</p>
  <p>If you did not request this OTP or have any concerns, please contact our support team immediately.</p>
  <p>Thank you,</p>
  <p>[Your Company/Organization Name]</p>`
};

//send email
transporter.sendMail(mailDetails, (error, info) => {
  if (error) {
    console.log('Error:', error); // Log any error that occurs during sending the email
  } else {
    console.log('Email sent:', info.response); // Log the response indicating the successful email delivery
  }
});
