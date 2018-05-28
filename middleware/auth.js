
// auth middleware function
var auth = function(req, res, next) {
    if (req.session && req.session.email)
      return next();
    else
      return res.sendStatus(401);
  };

  exports.auth = auth;