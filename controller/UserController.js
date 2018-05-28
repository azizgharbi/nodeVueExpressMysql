var Model = require("./../models/user");

module.exports = {


    index:function(req,res){
        res.render('home')
    },

    createUser(req,res){

        Model.User.create(
        { 
            name: "aziz",
            email: "aziz@gmail.com",
            password : "aziz"
        }, 
        { 
            fields: ['name', 'email','password'] 
        }
    ).then(card => {
      res.redirect('/');
    });
    
    },

    login:function(req,res){
        res.render('auth/login')
     },

    loginAction:function(req,res){
          if (!req.body.email || !req.body.password) {
            res.send('login failed');    
          } else if(req.body.email === "aziz@gmail.com" && req.body.password === "aziz") {
            req.session.email = req.body.email;
            req.session.admin = true;
            console.log(req.session.email);
            res.send("login success!");
          }
     },

     logout:function(req,res){
        req.session.destroy();
        res.send("logout success!");
     },

};