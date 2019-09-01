module.exports = {
    index (req, res) {        
        return res.marko(
            require('../views/search/search.marko')           
        );
    },
};
