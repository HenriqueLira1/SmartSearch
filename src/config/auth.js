const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../app/models/User');

module.exports = async (app) => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',        
    },
    async (email, password, done) => {        
        const user = await User.findOne({ email: email});        

        if(!user || password != user.password) {                 
            return done(null, false, {
                message: 'Login e senha incorretos!'
            })
        } else {
            return done(null, user);
        }            
    }
    ));

    passport.serializeUser((user, done) => {
        const userSession = {
            name: user.name,
            email: user.email
        };

        done(null, userSession);
    });

    passport.deserializeUser((userSession, done) => {
        done(null, userSession);
    });

    app.use(session({
        secret: 'SmartSearch',
        genid: function (req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use((req, res, next) => {
        req.passport = passport;
        next();
    });

}