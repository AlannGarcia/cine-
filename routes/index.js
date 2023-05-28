const router = require('express').Router(); 
const passport = require('passport');
const cines = require('../models/cine.js');


router.get('/', (req,res,next)=>{
    res.render('index');
});

router.get('/signup', (req,res,next) =>{
    res.render('signup');
});

router.get('/views/vistaPeliculas', (req,res,next) =>{
    res.render('vistaPeliculas');
});



router.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/main',
    failureRedirect: '/signup',
    pastReqToCallBack: true 
}));

router.get('/signin', (req,res,next) =>{
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/main',
    failureRedirect: '/signin',
    pastReqToCallBack: true 
}));

router.get('/main', isAuthenticated, (req,res,next) =>{
    res.render('main');
});


async function exportarCines(){
    const listaCines = await cines.find();
    return listaCines;
}


router.get('/cines', async (req,res,next) =>{
    const listaCines = await cines.find();
    console.log(listaCines);
    res.locals.listaCines = listaCines; 
    res.render('cines',{listaCines});
});



router.get("/logout", (req, res, next) => {
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

module.exports = router, exportarCines;