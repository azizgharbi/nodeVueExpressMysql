var Model = require("./../models/User");

module.exports = {


    index:function(req,res){
        res.render('home')
    },

    GetCard:function(req,res){
        Model.User.findAll({
          where: {
            id: req.params.id
          }
        }).then(card =>{
            res.json(card);
          });
     },

};