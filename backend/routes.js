const express = require('express');
const auth = require('./auth');
const braintree = require('./braintree');
const email = require('./email');
const posts = require('./posts');

const router = express.Router();

// Middleware
// ... (add any middleware you need here)

// Routes
router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/client_token', braintree.getClientToken);
router.post('/send-email', email.sendEmail);
router.post('/posts', posts.createPost);
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.put('/posts/:id', posts.updatePost);
router.delete('/posts/:id', posts.deletePost);

module.exports = router;