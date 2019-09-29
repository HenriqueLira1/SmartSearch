const express = require('express');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const ReportController = require('./controllers/ReportController');
const SearchController = require('./controllers/SearchController');
const BaseController = require('./controllers/BaseController');
const Rules = require('./models/Rules');

const routes = express.Router();

routes.get('/', function(req, resp, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        resp.redirect('/login');
    }
});

routes.get('/user*', function(req, resp, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        resp.redirect('/login');
    }
});

routes.get('/report*', function(req, resp, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        resp.redirect('/login');
    }
});

routes.get('/report*', function(req, resp, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        resp.redirect('/login');
    }
});

routes.get('/', BaseController.index);

routes
    .route('/login')
    .get(LoginController.index)
    .post(LoginController.store);

routes.get('/report', ReportController.index);
routes.get('/report/:id', ReportController.show);

routes.get('/search', SearchController.index);

routes.get('/user', UserController.index);
routes.get('/user/new', UserController.create);
routes.post('/user', Rules.validateUser(), UserController.store);
routes.get('/user/:id', UserController.show);
routes.get('/user/:id/edit', UserController.edit);
routes.put('/user', Rules.validateUser(), UserController.update);
routes.delete('/user/:id', UserController.destroy);

module.exports = routes;
