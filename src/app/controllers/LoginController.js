module.exports = {

    index (req, res) {
        res.marko(require('../views/login/login.marko'));
    },

    store (req, res, next) {
        const passport = req.passport;
        passport.authenticate('local', (error, user, info) => {
            if (info) {  
                console.log(info);
                return res.marko(
                    require('../views/login/login.marko'), 
                    {                        
                        errors: info
                    }
                );
            } else if (error) {
                return next(error);
            } else {
                req.login(user, error => {
                    if (error) {
                        return next(error);                        
                    } else {                    
                        return res.redirect('/');
                    }
                });
            }
        })(req, res, next);
    }
}
