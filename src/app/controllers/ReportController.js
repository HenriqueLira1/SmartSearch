const Arpensp = require('../service/ArpenpService');
const Cadesp = require('../service/CadespService');
const Caged = require('../service/CagedService');

module.exports = {
    index(req, res) {
        return res.marko(require('../views/reports/reports.marko'));
    },
    show(req, res) {
        // const userId = req.params.id;

        const arpenspData = Arpensp.search({});

        console.log(arpenspData);

        // return res.marko(require("../views/user/form/user_form.marko"));
    }
};
