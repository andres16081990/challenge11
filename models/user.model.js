'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique: true
    }
});

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash;
    next()
})

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
    console.log('im worwing good p')
}

module.exports = mongoose.model('user',UserSchema);