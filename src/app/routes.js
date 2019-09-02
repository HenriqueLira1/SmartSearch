const express = require('express');
const { check } = require('express-validator/check');

const LivroController = require('./controllers/livroController');
const LoginController = require('./controllers/loginController');
const UserController = require('./controllers/UserController');
const ReportController = require('./controllers/ReportController');
const SearchController = require('./controllers/SearchController');
const BaseController = require('./controllers/BaseController');
const Rules = require('./models/Rules');
const Livro = require('./models/livro');

const routes = express.Router();

routes.get('/', BaseController.index);

routes.get('/report', ReportController.index);

routes.get('/search', SearchController.index);

routes.get('/user', UserController.index);
routes.get('/user/new', UserController.create);
routes.post('/user', Rules.validateUser(), UserController.store);
routes.get('/user/:id', UserController.show);
routes.get('/user/:id/edit', UserController.edit);
routes.put('/user', Rules.validateUser(), UserController.update);
routes.delete('/user/:id', UserController.destroy);


routes.get('/login', (req, resp) => {
    resp.marko(
        require('./views/login-new/login.marko')
    );
});

routes.get('/livros', LivroController.index);

routes.route('/livros/form')
    .get(LivroController.getNew)
    .put(LivroController.edit)
    .post(Livro.validate(), LivroController.store);

// routes.route('/login')
//     .get(LoginController.index)
//     .post(LoginController.store);

routes.delete('/livros/:id', LivroController.delete);

routes.get('/livros/form/:id', LivroController.getEdit);

module.exports = routes;