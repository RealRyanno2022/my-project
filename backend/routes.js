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

router.post('/execute_transaction', (req, res) => {
  const { paymentMethodNonce, amount } = req.body;

  gateway.transaction.sale(
    {
      amount,
      paymentMethodNonce,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err || !result.success) {
        res.status(500).send(err || 'Payment error');
      } else {
        res.send('Payment successful');
      }
    }
  );
});

router.post('/save_user_information', async (req, res) => {
  const { state, country, email, address, phoneNumber, postCode, firstName, lastName } = req.body;

  try {
    const query = `
      INSERT INTO users (state, country, email, address, phone_number, post_code, first_name, last_name)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const values = [state, country, email, address, phoneNumber, postCode, firstName, lastName];

    await pool.query(query, values);

    res.status(200).json({ message: 'User information saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user information', error: error.toString() });
  }
});



module.exports = router;