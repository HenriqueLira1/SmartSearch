const LivroDao = require('../dao/livro-dao');
const db = require('../../config/database');
const { validationResult } = require('express-validator/check');

module.exports = {

    index (req, res) {

        const livroDao = new LivroDao(db);

        livroDao.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    },

    getNew (req, resp) {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    },

    getEdit(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'), 
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    },

    store (req, res) {
        const livroDao = new LivroDao(db);

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.marko(
                require('../views/livros/form/form.marko'), 
                {
                    livro: req.body,
                    errors: errors.array()
                }
            );
        }
        
        livroDao.adiciona(req.body)
                .then(res.redirect('/livros'))
                .catch(erro => console.log(erro));
    },

    edit (req, res)  {
        const livroDao = new LivroDao(db);
        
        livroDao.atualiza(req.body)
            .then(res.redirect('/livros'))
            .catch(erro => console.log(erro));
    },

    delete (req, res) {
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
            .then(() => res.status(200).end())
            .catch(erro => console.log(erro));
    }
    

}
