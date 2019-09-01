module.exports = {
    index (req, res) {        
        return res.marko(
            require('../views/users/users.marko')
        );
    },

    create (req, res) {
        return res.marko(
            require('../views/users/form/user_form.marko')
        );
    },

    edit (req, res) {
        return res.marko(
            require('../views/users/form/user_form.marko')
        );
    },
};
