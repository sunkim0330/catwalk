const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));

app.listen(PORT, (error) => {
  if (error) {
    console.log(`failed to connect to server port: ${PORT}`);
  } else {
    console.log(`connected to the server at ${PORT}`);
  }
});