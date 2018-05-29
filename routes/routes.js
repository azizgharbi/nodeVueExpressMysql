var HomeController = require('../controller/HomeController');
var UserController = require('../controller/UserController');
var Middleware = require("./../middleware/auth");


app.get('/',HomeController.index);

app.get("/board",Middleware.auth,function(req,res){
    res.send('board');
})
//auth routes
app.get('/login',UserController.login);
app.post('/loginAction',UserController.loginAction);
app.get('/logout',UserController.logout);



/** 
 * redirect 404  
 */

app.get('*',function(req,res){
    return res.redirect("/");
})