'use strict'
const router = require('express').Router();
const {getRegister, register, getLogin, logInUser, logout} = require('../controllers/user.controller');
const haveid = require('../middlewares/authenticate.mid');
const {getUser}= require('../controllers/priate.controller')



router.get('/',haveid,getUser);


router.get('/register',getRegister);
router.post('/register',register);

router.get('/login',getLogin);
router.post('/login',logInUser);

router.get('/logout',logout);


module.exports = router;