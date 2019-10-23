const { validationResult } = require('express-validator/check');
const ApisService = require('../service/ApisService');
const Report = require('../models/Report');
const Validators = require('../helpers/Validators');

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

        const { name, cpf, cnpj } = req.body;
        let customErrors = [];

        if (cnpj) {
            const isCnpjValid = Validators.validateCNPJ(cnpj);
            if (!isCnpjValid) {
                customErrors.push({ msg: 'CNPJ inválido!' });
            }
        }

        if (cpf) {
            const isCpfValid = Validators.validateCPF(cpf);
            if (!isCpfValid) {
                customErrors.push({ msg: 'CPF inválido!' });
            }
        }

        if (customErrors) {
            return res.marko(require('../views/search/search.marko'), {
                search: req.body,
                errors: customErrors
            });
        }

        const { name: user } = req.user;

        const report = await Report.create({ user, name, cpf, processing: true });

        const apisService = new ApisService();
        apisService.callApis(req.body, report._id);

        response = res.marko(require('../views/search/search.marko'), {
            search: req.body,
            success: 'O relatório está sendo processado, acompanhe o progresso na aba "Relatórios"'
        });

        return response;
    }
};
