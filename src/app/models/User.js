const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,        
    },
    password: {
        type: String,
        required: true,        
    },
    groupAccess: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

class User {
    static validate() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('Título deve ter no minimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!'),
        ]
    }
}

module.exports ={
    model: model('User', UserSchema),
    class: User
}
    