const User = require('../models/user.model');

async function getSignup(req,res){
    res.render("../views/signup");
};


function getLogin(req,res){
    res.render("../views/login");
};

async function signup(req,res){
    const user = new User(
      req.body.email,
      req.body.password,
      req.body.fullname,
      req.body.postal,
      req.body.city
    );
  
    await user.signup();
  
    res.redirect('/login');
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup,
};