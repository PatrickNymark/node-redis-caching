const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const client = redis.createClient(process.env.REDIS_URI);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

// cache function to be called before exec.
mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');

  return this;
}

// override mongooose Query exec function
mongoose.Query.prototype.exec = async function () {
  if(!this.useCache) {
    return exec.apply(this, arguments);
  }

  // generate redis key
  const key = JSON.stringify(Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
  }));

  // check redis for value
  const cachedValue = await client.hget(this.hashKey, key);
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
  client.hset(this.hashKey, key, JSON.stringify(result));
  // expire in seconds
  client.expire(key, 120);

  return result;
} 