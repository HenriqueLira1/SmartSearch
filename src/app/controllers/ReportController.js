module.exports = {
    index (req, res) {        
        return res.marko(
            require('../views/reports/reports.marko')            
        );
    },
};
