const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>This is my first Express app :)</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log('Example app is runing on localhost:3000!');
});

