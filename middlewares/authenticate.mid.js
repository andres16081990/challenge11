'use strict'

const haveId = (req,res,next)=>{
    try {
        if(req.session.userId){
            console.log('pass here2')
            next()
        }
        else{
            res.redirect('/login');
            console.log('pass here1')
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = haveId;