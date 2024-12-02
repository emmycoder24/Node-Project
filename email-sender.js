const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use other services
  auth: {
    user: 'samuelgbolade@gmail.com', // Replace with your email
    pass: 'udeleyemi26.'  // Replace with your email password
  }
});

const mailOptions = {
  from: 'samuelgbolade@gmail.com', // Replace with your email
  to: 'samuelgbolade@gmail.com',   // Replace with your email
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
