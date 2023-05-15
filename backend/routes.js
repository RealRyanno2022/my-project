const express = require('express');
const auth = require('./auth');
const braintree = require('./braintree');
const email = require('./email');
const posts = require('./posts');
const { getClientToken, processPayment } = require('./braintree.js');  // import from braintree.js

const router = express.Router();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/client_token', getClientToken);  // use getClientToken from braintree.js
router.post('/checkout', processPayment);  // use processPayment from braintree.js
router.post('/posts', posts.createPost);
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.put('/posts/:id', posts.updatePost);
router.delete('/posts/:id', posts.deletePost);

// Add a new route for sending emails
router.post('/send_email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await email(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email.', error: error.toString() });
  }
});

module.exports = router;