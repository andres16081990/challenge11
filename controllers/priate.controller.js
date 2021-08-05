'use strict'

const Private = require('../models/private.model');
const User = require('../models/user.model');

const getUser = async(req,res)=>{
    try {
        const user = await User.find({_id :req.session.userId});
        const privateUser = await Private.find({user: req.session.userId})
        res.status(200).render('index',({user , privateUser}));
        console.log('user finded')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUser
}