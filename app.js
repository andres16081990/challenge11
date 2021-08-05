'use strict'
//enviorment variable
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');
const port = 3000;
const {store} = require('./config/db.session')

//DB Config
require('./config/db.config');

//Require router
const router =  require('./routes/user.routes')

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret key',
    resave : true,
    saveUninitialized: true,
    store: store,
    cookie:{
        maxAge : 600000
    },
}))


//set view engine
app.set('views', path.join(__dirname,'views'));
app.engine('hbs',hbs({
    layoutsDir: path.join(app.get('views'),'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname : '.hbs',
    defaultLayout : 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true 
    }
}));

app.set('view engine','.hbs');

//use Routes
app.use('/',router);

app.listen(process.env.PORT||port, console.log(`App running in port ${process.env.PORT || port}`))