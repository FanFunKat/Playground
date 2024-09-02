const express = require('express');
const router = express.Router();
const records = require('./records');

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

// Send a GET request to /quotes to READ(view) a list of quotes.
router.get('/quotes', asyncHandler(async (req, res) => {
  const quotes = await records.getQuotes();
  if (quotes) {
    res.json(quotes);
  } else {
    res.status(404).json({ message: 'No quotes found' });
  }
}));

// Send a GET request to /quotes/:id to READ(view) a quote.
router.get('/quotes/:id', asyncHandler(async (req, res) => {
  const quote = await records.getQuote(req.params.id);
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
  }
}));

// Send a POST request to /quotes to CREATE(add) a new quote.
router.post('/quotes', asyncHandler(async (req, res) => {
  if (req.body.quote && req.body.author) {
    const quote = await records.createQuote({
      quote: req.body.quote,
      author: req.body.author
    });
    res.status(201).json(quote);
  } else {
    res.status(400).json({ message: 'Please provide a quote and an author' });
  }
}));

// Send a PUT request to /quotes/:id to UPDATE(edit) a quote.
router.put('/quotes/:id', asyncHandler(async (req, res) => {
  const quote = await records.getQuote(req.params.id);
  if (quote) {
    quote.quote = req.body.quote;
    quote.author = req.body.author;

    await records.updateQuote(quote);
    res.status(204).end();
  } else {
    res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
  }
}));

// Send a DELETE request to /quotes/:id to to DELETE(remove) a quote.
router.delete('/quotes/:id', asyncHandler(async (req, res) => {
  const quote = await records.getQuote(req.params.id);
  if (quote) {
    await records.deleteQuote(quote);
    res.status(204).end();
  } else {
    res.status(404).json({ message: `Quote ID ${req.params.id} not found` });
  }
}));

// Send a GET request to /quotes/quote/random to READ(view) a random quote.

module.exports = router;