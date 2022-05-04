const express = require('express');

const booksController = require('../controllers/booksController')
const booksRouter = express.Router();

booksRouter.get('/books', booksController.getAll);

module.exports = booksRouter;
