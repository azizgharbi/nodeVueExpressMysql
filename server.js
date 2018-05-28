var path = require("path");
var express= require("express");
var session = require('express-session');
app=express();

// packge imported
var swig = require("swig");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var database = require("./database/config");


//============================================
        /* Let's the game begin */
//============================================
// session 
app.use(session({
  secret: 'tXLpM9Ukf9',
  resave: true,
  saveUninitialized: true
}));
// assets in the public folder
app.use('/static', express.static('public'));
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// set engine swig
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

//database connection
database.sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
// require Routes
require("./routes/routes");

//server connecting
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Hi ! the server is running on port "+ port);
})