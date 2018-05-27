var Model = require("./../models/User");

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
            id: req.params.id
          }
        }).then(card =>{
            res.json(card);
          });
     },

     logout:function(req,res){
        req.session.destroy();
        res.send("logout success!");
     },

};