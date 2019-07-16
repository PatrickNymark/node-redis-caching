const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/login', login);
router.post('/register', register);
//router.get('/', postService.getAll);

module.exports = router;

function login(req, res, next) {
  userService.login(req.body.email, req.body.password)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Password or email incorrect' }))
    .catch(err => next(err))
}

function register(req, res, next) {
  userService.register(req.body)
    .then(user => res.json(user))
    .catch(err => next(err))
}

module.exports = router; 