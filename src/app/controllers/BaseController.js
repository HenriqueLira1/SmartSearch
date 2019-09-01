module.exports = {
    index (req, res) {        
        return res.marko(
            require('../views/home/home.marko')          
        );
    },
};
