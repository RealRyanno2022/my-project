const express = require('express');
const auth = require('./auth');
const braintree = require('./braintree');
const email = require('./email');
const posts = require('./posts');
const { getClientToken, processPayment } = require('./braintree.js');
const sendEmail = require('./sendEmail'); // Update the import statement

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello, World!');
});


router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/client_token', getClientToken);
router.post('/checkout', processPayment);
router.post('/posts', posts.createPost);
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.put('/posts/:id', posts.updatePost);
router.delete('/posts/:id', posts.deletePost);

// Add a new route for sending emails
router.post('/send_email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email.', error: error.toString() });
  }
});

router.post('/execute_transaction', async (req, res) => {
  const { amount, paymentMethodNonce } = req.body;

  try {
    // Execute the Braintree transaction
    const result = await braintree.transaction.sale({
      amount,
      paymentMethodNonce,
    });

    if (result.success) {
      res.status(200).json({ message: 'Transaction executed successfully.' });
    } else {
      res.status(500).json({ message: 'Transaction failed.', error: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error executing transaction.', error: error.toString() });
  }
});

module.exports = router;