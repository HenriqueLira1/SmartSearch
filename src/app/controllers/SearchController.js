const { validationResult } = require('express-validator/check');
const axios = require('axios');
const Report = require('../models/Report');

module.exports = {
    index(req, res) {
        return res.marko(require('../views/search/search.marko'), { search: {} });
    },

    async store(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.marko(require('../views/search/search.marko'), {
                search: req.body,
                errors: errors.array()
            });
        }

        const { name, cpf, cnpj, email, phone } = req.body;

        let response;
        let apiError = false;
        let fatalApiError = false;
        const reportData = {};

        try {
            const arpenp = await axios.post('https://smartsearchfiap.ddns.net/api/arpenp1', {
                cnpj
            });

            reportData.arpenp = JSON.stringify(arpenp.data);
        } catch (error) {
            apiError = true;
        }

        try {
            const cadesp = await axios.post('https://smartsearchfiap.ddns.net/api/arpenp', {
                cnpj
            });

            reportData.cadesp = JSON.stringify(cadesp.data);
        } catch (error) {
            apiError = true;
        }

        if (Object.entries(reportData).length !== 0) {
            await Report.create(reportData);
        } else {
            fatalApiError = true;
        }

        if (fatalApiError) {
            response = res.marko(require('../views/search/search.marko'), {
                search: req.body,
                fatalApiError: 'Falha ao buscar dados,'
            });
        } else if (apiError) {
            response = res.marko(require('../views/search/search.marko'), {
                search: req.body,
                apiError: 'Alguns dados podem não ter sido gravados.'
            });
        } else {
            response = res.marko(require('../views/search/search.marko'), {
                search: req.body,
                success: 'Pesquisa gerada com sucesso!'
            });
        }

        return response;
    }
};
