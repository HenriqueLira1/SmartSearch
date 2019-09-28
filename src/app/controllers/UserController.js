const { validationResult } = require('express-validator/check');
const User = require('../models/User');
const format = require('date-format');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        const formatedUsers = users.map(user => {
            let accessGroup;
            switch (user.accessGroup) {
                case 1:
                    accessGroup = 'Administrativo';
                    break;
                case 2:
                    accessGroup = 'Analista';
                    break;
                case 3:
                    accessGroup = 'Auditor';
                    break;
            }

            const createdAt = format(
                'dd/MM/yyyy hh:mm',
                new Date(user.createdAt)
            );

            return {
                name: user.name,
                accessGroup: accessGroup,
                createdAt: createdAt,
                id: user.id
            };
        });

        return res.marko(require('../views/user/user.marko'), {
            users: formatedUsers
        });
    },

    create(req, res) {
        return res.marko(require('../views/user/form/user_form.marko'), {
            user: {}
        });
    },

    async store(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.marko(require('../views/user/form/user_form.marko'), {
                user: req.body,
                errors: errors.array()
            });
        }

        const { name, email, password, access_group: accessGroup } = req.body;

        await User.create({
            name,
            email,
            password,
            accessGroup
        });

        return res.redirect('/user');
    },

    show(req, res) {
        return res.marko(require('../views/user/form/user_form.marko'));
    },

    async edit(req, res) {
        const userId = req.params.id;

        const user = await User.findById(userId);

        if (!user.isEmpty) {
            return res.marko(require('../views/user/form/user_form.marko'), {
                user: user
            });
        } else {
            return res.redirect('/user');
        }
    },

    async update(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.marko(require('../views/user/form/user_form.marko'), {
                user: req.body,
                errors: errors.array()
            });
        }

        const {
            id,
            name,
            email,
            password,
            access_group: accessGroup
        } = req.body;

        await User.updateOne(
            { _id: id },
            {
                name,
                email,
                password,
                accessGroup
            }
        );

        return res.redirect('/user');
    },

    async destroy(req, res) {
        const userId = req.params.id;

        await User.deleteOne({
            _id: userId
        });

        return res.redirect('/user');
    }
};
