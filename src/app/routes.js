const express = require('express');
const LivroController = require('./controllers/livroController');
const LoginController = require('./controllers/loginController');
const UserController = require('./controllers/UserController');
const ReportController = require('./controllers/ReportController');
const SearchController = require('./controllers/SearchController');
const BaseController = require('./controllers/BaseController');
const Livro = require('./models/livro');

const routes = express.Router();

routes.get('/', BaseController.index);

routes.get('/reports', ReportController.index);

routes.get('/search', SearchController.index);

routes.get('/users', UserController.index);
routes.get('/users/new', UserController.create);
routes.get('/users/edit', UserController.edit);

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