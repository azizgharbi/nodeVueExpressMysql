
var database = require('./../database/config');

const User = database.sequelize.define('User', {
    name: {
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
    password: {
        type: database.Sequelize.STRING
    }
  },
  {
    timestamps: false
  });

  exports.User = User ;