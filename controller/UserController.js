
var Model = require('./../models/user');

module.exports = {


    index:function(req,res){
        res.render('home')
    },

    login:function(req,res){
        res.render('auth/login')
     },

    loginAction:function(req,res){
        Model.User.findAll({
            where: {
              email: req.body.email,
              password : req.body.password
            }
        }).then(User =>{
            req.session.user = User;
            console.log(req.session.user);
            res.send("login success!");
        }).catch(error => {
            res.send('login failed');    
        });
     },

     logout:function(req,res){
        req.session.destroy();
        res.send("logout success!");
     },

};