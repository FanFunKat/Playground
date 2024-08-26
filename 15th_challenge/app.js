const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: 'Who is buried in Grand\'s tomb?', answer: '<NAME>' });
});

app.listen(3000, () => {
  console.log('Example app is runing on localhost:3000!');
});

