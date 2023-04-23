const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');


//Inicializacion
const app = express();
require('./database');
require('./passport/local.auth');


//Configuraciones
app.set('views', path.join(__dirname, 'views'));//informo donde se encuentran las vistas 
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//para recibir los datos del cliente como en un registro
app.use(session({
    secret: 'contraSecreta',
    resave: false,
    saveUninitialized: false
  })); //guardamos la sesion de los datos
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//pongo el mensaje aca para tenerlo en toda la app
app.use((req, res, next) => {
    app.locals.errorDeRegistro = req.flash('errorDeRegistro');
    app.locals.errorDeIngreso = req.flash('errorDeIngreso');
    app.locals.user = req.user;//almaceno el usuario
    next()
});



app.use('/', require('./routes/index'));



app.get('/', (req,res,next)=>{
    res.render('home');
});

app.get('/signup', (req,res,next) =>{
    res.render('signup');
});

app.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/main',
    failureRedirect: '/signup',
    pastReqToCallBack: true 
}));

app.get('/signin', (req,res,next) =>{
    res.render('signin');
});

 app.post('/signin', passport.authenticate('local-signin', {
     successRedirect: '/main',
     failureRedirect: '/signin',
     pastReqToCallBack: true 
 }))
 app.get('/main', isAuthenticated, (req,res,next) =>{
     res.render('main');
 });

app.get("/logout", (req, res, next) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
});


function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}




//Iniciamos el servidor
app.listen(3000, ()=>{
    console.log(`Server on port 3000`);
});

