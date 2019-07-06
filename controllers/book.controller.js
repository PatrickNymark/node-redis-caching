const express = require('express');
const router = express.Router();
const bookService = require('../services/book.service');


router.post('/', createBook);
router.get('/:genre', getBooksByGenre);
//router.get('/', postService.getAll);

module.exports = router;

function createBook(req, res, next) {
  bookService.createBook(req.body.title, req.body.pages, req.body.genre, req.body.author)
    .then(book => res.json(book))
    .catch(err => next(err))
}

function getBooksByGenre(req, res, next) {
  bookService.getBooksByGenre(req.params.genre)
    .then(books => res.json(books))
    .catch(err => next(err))
}

module.exports = router; 