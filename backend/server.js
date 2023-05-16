const express = require('express');
const router = require('./routes');
const { gateway } = require('./braintree');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());  // you only need one body-parsing middleware
app.use(router);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});