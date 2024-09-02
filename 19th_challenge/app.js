const express = require('express');
const app = express();

const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ(view) a list of quotes.
app.get('/quotes', async (req, res, next) => {
  try {
    const quotes = await records.getQuotes();
    if (quotes) {
      res.json(quotes);
    } else {
      res.status(404).json({ message: 'No quotes found' });
    }
  } catch (err) {
    next(err);
  }
});
// Send a GET request to /quotes/:id to READ(view) a quote.
app.get('/quotes/:id', async (req, res, next) => {
  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
    }
  } catch (err) {
    next(err);
  }
});
// Send a POST request to /quotes to CREATE(add) a new quote.
app.post('/quotes', async (req, res, next) => {
  try {
    if (req.body.quote && req.body.author) {
      const newQuote = await records.createQuote({
        quote: req.body.quote,
        author: req.body.author
      });
      res.status(201).json(newQuote);
    } else {
      res.status(400).json({ message: 'Please provide a quote and an author' });
    }
  } catch (err) {
    next(err);
  }
});
// Send a PUT request to /quotes/:id to UPDATE(edit) a quote.
app.put('/quotes/:id', async (req, res, next) => {
  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      quote.quote = req.body.quote;
      quote.author = req.body.author;

      await records.updateQuote(quote);
      res.status(204).end();
    } else {
      res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
    }

  } catch (err) {
    next(err);
  }
});
// Send a DELETE request to /quotes/:id to to DELETE(remove) a quote.
app.delete('/quotes/:id', async (req, res, next) => {
  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      await records.deleteQuote(quote);
      res.status(204).end();
    } else {
      res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
    }
  } catch (err) {
    next(err);
  }
})
// Send a GET request to /quotes/quote/random to READ(view) a random quote.

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));