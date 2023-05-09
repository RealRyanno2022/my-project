const express = require('express');
const router = require('./routes');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});