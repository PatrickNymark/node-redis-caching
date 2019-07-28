const { clearHash } = require('./cache');

module.exports = clearCache;

function clearCache(req, res, next) {
  const test = "";
  clearHash(test);

  return next();
}
