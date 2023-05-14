const emailjs = require('emailjs');

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const server  = emailjs.server.connect({
   user:    "ddddddddddddrrrrrrrr@gmail.com", 
   password:"Blackmamba13!", 
   host:    "smtp.gmail.com", 
   ssl:     true
  });

  // setup email data with unicode symbols
  let messageDetails = {
    text:    message, 
    from:    email, 
    to:      "ddddddddddddrrrrrrrr@gmail.com",
    subject: `New message from ${name}`
  };

  // send the message and get a callback with an error or details of the message that was sent
  server.send(messageDetails, function(err, message) { 
    if(err) {
      console.error('Error sending email:', err);
      res.status(500).send('Email sending failed');
    } else {
      console.log('Email sent:', message);
      res.send('Email sent successfully');
    }
  });
};

module.exports = {
  sendEmail,
};