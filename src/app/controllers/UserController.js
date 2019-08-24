const LivroDao = require('../dao/livro-dao');
const db = require('../../config/database');
const { validationResult } = require('express-validator/check');

module.exports = {
    index (req, res) {        
        return require('../views/users/users.marko');
    },

    async store(req, res){
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.marko(
                require(''),
                {
                    livro
                }
            )
        }
    }
};
