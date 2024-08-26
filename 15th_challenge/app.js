const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.locals.prompt = 'Who is buried in Grand\'s tomb?';
  res.render('card');
});

app.listen(3000, () => {
  console.log('Example app is runing on localhost:3000!');
});

