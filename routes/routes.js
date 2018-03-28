var HomeController = require('../controller/HomeController');

app.get('/',HomeController.index);

/** 
 * redirect 404  
 */

app.get('*',function(req,res){
    return res.redirect("/");
})