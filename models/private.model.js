'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrivateSchema = new Schema ({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('private',PrivateSchema);