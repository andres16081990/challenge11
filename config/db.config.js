'use strict'

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/newCollectionChallenge11',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.on('error',()=> console.error('Errorr in DB connection'));
mongoose.connection.once('open',()=> console.log('DB Connected'));