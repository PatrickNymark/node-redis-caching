# Simple caching with node, express and mongoose

This is a basic application for caching with Redis in memory database. 

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
1. Node v8+
2. MongoDB v3.6+

---

#### Step 1. Clone git repository
```
$ git clone https://github.com/PatrickNymark/node-redis-caching.git
```

#### Step 2. Go into cloned folder
```
$ cd node-redis-caching
```
#### Step 3. Create .env
```
$ touch .env
```
#### Step 4. Add enviroment variables
```
MONGO_URI = 'mongodb://localhost:27017/node-redis-caching'
REDIS_URI = 'redis://127.0.0.1:6379'
SECRET_OR_KEY = 'secretKey'
```
#### Step 5. Install packages
```
$ npm install
```
####
```
$ npm run dev
```

## Author
**Patrick Nymark**

