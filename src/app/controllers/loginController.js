module.exports = {

    index (req, res) {
        res.marko(require('../views/login/login.marko'));
    },

    store (req, res, next) {
        const passport = req.passport;
        passport.authenticate('local', (error, user, info) => {
            if (info) {
                return res.marko('../views/login/login.marko');
            } else if (error) {
                return next(error);
            } else {
                req.login(user, erro => {
                    if (erro) {
                        return next(erro);                        
                    } else {
                        // console.log('ola');
                        return res.redirect('/livros');
                    }
                });
            }
        })(req, res, next);
    }
}
