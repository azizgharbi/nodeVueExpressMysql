var HomeController = require('../controller/HomeController');
var UserController = require('../controller/UserController');


app.get('/',HomeController.index);
app.get('/createUser',UserController.createUser);



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