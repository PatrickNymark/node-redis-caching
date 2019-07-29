const { clearHash } = require('./cache');

module.exports = clearCache;

function clearCache(req, res, next) {
  if(req.user.sub) clearHash(req.user.sub);

  clearHash("");
  return  next();
}
