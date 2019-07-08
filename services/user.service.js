const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = {
  login,
  register
}

/**
 * Login user
 * @param {string} email a string that represents a user's email
 * @param {string} password a string that represents a user's plain password
 * @returns a Promise or exception  
 */
async function login(email, password) {
  const user = await User.findOne({ email: email });
  
  if(user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithOutPass } = user.toObject();
    const token = jwt.sign({ sub: user.id, role: user.roles }, process.env.SECRET_OR_KEY, { expiresIn: '2d'});
    return {
      ...userWithOutPass,
      token
    }
  }
}

/**
 * Register user.
 * @param {object} userData an object that represents a user.
 * @returns A Promise or exception.
 */
async function register(userData) {
  if (await User.findOne({ email: userData.email })) {
    throw 'Email "' + userData.email + '" is already taken';
  }

  const user = new User(userData);
  return await user.save();
}