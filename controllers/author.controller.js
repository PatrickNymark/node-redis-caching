const express = require('express');
const router = express.Router();
const authorService = require('../services/author.service');
const authorize = require('../helpers/authentication');

router.post('/', createAuthor);
router.get('/', getAllAuthors);
router.get('/query', searchAuthors);
router.get('/:id', getAuthorById);

module.exports = router;

function createAuthor(req, res, next) {
  authorService.createAuthor(req.body)
    .then(author => res.json(author))
    .catch(err => next(err))
}

function getAllAuthors(req, res, next) {
  authorService.getAllAuthors()
    .then(authors => res.json(authors))
    .catch(err => next(err))
}

function getAuthorById(req, res, next) {
  authorService.getAuthorById(req.params.id)
    .then(author => res.json(author))
    .catch(err => next(err))
}

function searchAuthors(req, res, next) {
  authorService.searchAuthors(req.query)
    .then(author => res.json(author))
    .catch(err => next(err))
}

module.exports = router; 