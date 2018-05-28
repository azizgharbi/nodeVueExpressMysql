var database = require('./../database/config');


var User = database.sequelize.define('User', {
    name: database.Sequelize.STRING,
    email: database.Sequelize.STRING,
    password: database.Sequelize.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  exports.User = User ;