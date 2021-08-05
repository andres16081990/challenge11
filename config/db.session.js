'use strict'

const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

const URL =  'mongodb://localhost:27017/newCollectionChallenge11';

const store = new MongoDBSession({
    uri : process.env.MONGODB_URL || URL,
    collection: 'sessionChallenge11'
})

module.exports = {
    store
}