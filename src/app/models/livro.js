const { check } = require('express-validator/check');

class Livro {
    static validate() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('Título deve ter no minimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!'),
        ]
    }
}

module.exports = Livro;