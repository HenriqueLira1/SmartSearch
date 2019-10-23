const { check } = require('express-validator/check');

class Rules {
    static validateUser() {
        return [
            check('email')
                .isEmail()
                .withMessage('Email inválido!'),
            check('password')
                .isLength({ min: 5 })
                .withMessage('A senha precisa ter no minimo 10 caracteres!')
        ];
    }
    static validateSeach() {
        return [
            check('cpf')
                .not()
                .isEmpty()
                .withMessage('O CPF é obrigatório.')
        ];
    }
}

module.exports = Rules;
