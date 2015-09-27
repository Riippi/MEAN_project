var passport = require('passport');

exports.authenticate =  function(req, res, next) {


    console.log(" eka vaihe");

    console.log(req.body);

    req.body.username = req.body.username.toLowerCase();

    console.log(" toka vaihe");

    console.log(req.body);

    passport.authenticate('local', function(err, user, info) {
        if(err) {
            console.log(" passiporttit err 1 ");
            return next(err);
        }
        if(!user) {
            console.log(" passiporttit err 2 ");
            res.send({success:false})
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }

            // Remove salt & password hash for security - client doesn't need them
            user.salt = undefined;
            user.hashed_pw = undefined;

            console.log("logged in:");
            console.log(user);

            res.send({success:true, user: user});
        });
    })(req, res, next);
};


exports.requiresApiLogin =  function(req, res, next){
    if(!req.isAuthenticated()){
        res.status(403);
        res.end();
    } else {
        next();
    }
};

exports.requiresRole = function(role){
    return function(req, res, next){
        if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1){
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
}