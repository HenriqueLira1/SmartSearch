const express = require('express');
const LivroController = require('./controllers/livroController');
const LoginController = require('./controllers/loginController');
const UserController = require('./controllers/UserController');
const Livro = require('./models/livro');

const routes = express.Router();

routes.get('/', (req, resp) => {
    resp.marko(
        require('./views/home/home.marko')
    );
});

routes.get('/users', (req, resp) => {
    resp.marko(
        require('./views/users/users.marko')
    );
});

routes.get('/users/new', (req, resp) => {
    resp.marko(
        require('./views/users/form/user_form.marko')
    );
});

routes.get('/users/edit', (req, resp) => {
    resp.marko(
        require('./views/users/form/user_form.marko')
    );
});

routes.get('/reports', (req, resp) => {
    resp.marko(
        require('./views/reports/reports.marko')
    );
});

routes.get('/search', (req, resp) => {
    resp.marko(
        require('./views/search/search.marko')
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