const express = require('express');
const router = require('./routes');

const app = express();
const port = 5000;

app.use(express.json());  // you only need one body-parsing middleware
app.use(router);

app.listen('192.168.56.1', port, () => {
  console.log(`Server running on port ${port}`);
});