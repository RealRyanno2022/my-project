const emailjs = require('emailjs-com');

const sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const emailContent = {
    to: 'your-email@example.com',
    from: email,
    subject: `New message from ${name}`,
    text: message,
  };

  emailjs.send('service_tk7hucg', 'template_1uh5d7b', emailContent, 'ZDyaFUpjb8MbPWzl3')
    .then((response) => {
      console.log('Email sent:', response);
      res.send('Email sent successfully');
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      res.status(500).send('Email sending failed');
    });
};

module.exports = {
  sendEmail,
};