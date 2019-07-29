const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const client = redis.createClient(process.env.REDIS_URI || process.env.REDISCLOUD_URL);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

// cache function to be called before exec.
mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;

  // create dynamic redis key
  this.key = JSON.stringify(Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  }));

  this.hashKey = JSON.stringify(options.key || '');
  this.expire = JSON.stringify(options.expire || 60 * 60 );

  return this;
}

// override mongooose Query exec function
mongoose.Query.prototype.exec = async function () {
  if(!this.useCache) {
    return exec.apply(this, arguments);
  }

  // check redis for value
  const cachedValue = await client.hget(this.hashKey, this.key);
  if(cachedValue) {
    const doc = JSON.parse(cachedValue);
    // mongoose exec excepts a mongoose model to be returned
    // therefore, convert cached value to mongoose model.
    return Array.isArray(doc) 
      ? doc.map(d => new this.model(d)) 
      : new this.model(doc); 
  }

  // issue query and store result in redis
  const result = await exec.apply(this, arguments);
  client.hset(this.hashKey, this.key, JSON.stringify(result));
  // expire in seconds
  client.expire(this.hashKey, this.expire);

  return result;
} 

// clear cache function
module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};