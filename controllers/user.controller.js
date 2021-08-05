'use strict'

const User = require('../models/user.model');


const getRegister = (req,res)=>{
    res.render('register');
}

const getLogin = (req,res)=>{
    res.render('login');
}

const register = async(req,res)=>{
    const {name, email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(!userExist){
            const user = await new User({name, email, password});
            await user.save();
            req.session.userId = user._id;
            res.redirect('/login')
            console.log(`user registered ${user}`)
        }
        else{
            res.redirect('login');
        }

    } catch (error) {
        console.log(error);
    }
}



const logInUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const response = await user.comparePassword(password);
            if(response){
                req.session.userId = user._id;
                console.log(req.session.userId);
                res.redirect('/')
                console.log('user logged')
                console.log(`${user}${req.session}`);
            }
            else{
                res.redirect('login')
                console.log('user no logged')
            }
        }
        else{
            res.redirect('/register');
            console.log('user sent to register')
        }
    } catch (error) {
        console.log(error)
    }
}

const logout = (req,res)=>{
    req.session.destroy((error)=>{
        if(error){
            next(error);
            console.log('Error is in logout');
        }
        res.redirect('/login');
    })
}





module.exports ={
    getRegister,
    register,
    getLogin,
    logInUser,
    logout
}


