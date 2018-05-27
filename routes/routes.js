var HomeController = require('../controller/HomeController');
var UserController = require('../controller/UserController');


app.get('/',HomeController.index);
app.post('/login',UserController.login);
app.get('/logout',UserController.logout);



/** 
 * redirect 404  
 */

app.get('*',function(req,res){
    return res.redirect("/");
})