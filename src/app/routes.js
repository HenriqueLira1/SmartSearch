const express = require('express');

const LivroController = require('./controller/livroController');
const LoginController = require('./controller/loginController');
const Livro = require('./models/livro');

const routes = express.Router();

routes.get('/', (req, resp) => {
    resp.marko(
        require('./views/home/monster-admin-lite-master/template/home.marko')
    );
});

routes.get('/livros', LivroController.index);

routes.route('/livros/form')
    .get(LivroController.getNew)
    .post(Livro.validate(), LivroController.store)
    .put(LivroController.edit);

routes.route('/login')
    .get(LoginController.index)
    .post(LoginController.store);

routes.delete('/livros/:id', LivroController.delete);

routes.get('/livros/form/:id', LivroController.getEdit);

module.exports = routes;