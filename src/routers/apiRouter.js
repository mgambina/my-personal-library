const express = require('express');

const booksController = require('../controllers/booksController')
const booksRouter = express.Router();

booksRouter.get('/books', booksController.getAll);
// booksRouter.post('/book', booksController.create);

module.exports = booksRouter;
