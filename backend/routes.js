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
router.post('/send-email', email.sendEmail);
router.post('/posts', posts.createPost);
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.put('/posts/:id', posts.updatePost);
router.delete('/posts/:id', posts.deletePost);

module.exports = router;