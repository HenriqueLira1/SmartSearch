const axios = require('axios');
const Report = require('../models/Report');

module.exports = class ApisService {
    async callApis(seachData, reportId) {
        const { name, cpf, cnpj, email, phone } = seachData;

        const reportData = { processing: false };

        const apis = ['arisp', 'arpenp', 'cadesp', 'caged', 'censec', 'detran', 'infocrim', 'jucesp', 'siel', 'sivec'];

        for (const api of apis) {
            try {
                const apiData = await axios.post(`https://smartsearchfiap.ddns.net/api/${api}`, {
                    cnpj,
                    cpf
                });

                reportData[api] = JSON.stringify(apiData.data);
            } catch (error) {
                reportData.apiError = true;
            }
        }

        let cagedData;

        if (reportData.caged) {
            cagedData = JSON.parse(reportData.caged);
        }

        if (name) {
            reportData.name = name;
        } else if (reportData.caged) {
            reportData.name = cagedData.identificacao.nome;
        }
        if (cpf) {
            reportData.cpf = cpf;
        } else if (reportData.caged) {
            reportData.cpf = cagedData.dados_cadastrais.cpf;
        }

        if (Object.entries(reportData).length !== 0) {
            await Report.findByIdAndUpdate(reportId, reportData);
        } else {
            await Report.findByIdAndUpdate(reportId, { fatalApiError: true, processing: false });
        }
    }
};
