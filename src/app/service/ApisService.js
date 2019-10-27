const axios = require('axios');
const Report = require('../models/Report');

module.exports = class ApisService {
    async callApis(seachData, reportId) {
        const { name, cpf, cnpj, businessName, nis } = seachData;

        const reportData = { processing: false };
        let errorCounter = 0;

        const apis = [
            'arisp',
            'arpenp',
            'cadesp',
            'caged',
            'censec',
            'detran',
            'infocrim',
            'jucesp',
            'siel',
            'sivec',
            'bolsa-familia',
            'escavador',
            'jusbrasil'
        ];

        for (const api of apis) {
            const apiParameters = {};

            switch (api) {
                case 'arisp':
                case 'caged':
                case 'detran':
                case 'censec':
                case 'infocrim':
                    apiParameters.cnpj = cnpj;
                    apiParameters.cpf = cpf;
                    break;
                case 'arpenp':
                    apiParameters.cpf = cpf;
                    break;
                case 'cadesp':
                    apiParameters.cnpj = cnpj;
                    break;
                case 'siel':
                case 'sivec':
                case 'jusbrasil':
                    apiParameters.nome_completo = name;
                    break;
                case 'jucesp':
                    apiParameters.nome_empresa = businessName;
                    apiParameters.cnpj = cnpj;
                    break;
                case 'bolsa-familia':
                    const currentDate = new Date();
                    const currentMonth = ('0' + (currentDate.getMonth() - 1)).slice(-2);
                    const currentYear = currentDate.getFullYear();

                    apiParameters.nis = nis;
                    apiParameters.ano_mes_referencia = `${currentYear}${currentMonth}`;
                    apiParameters.ano_mes_competencia = `${currentYear}${currentMonth}`;
                    break;

                case 'escavador':
                    if (name) {
                        apiParameters.term = name;
                    } else if (cpf) {
                        apiParameters.term = cpf;
                    } else if (cnpj) {
                        apiParameters.term = cnpj;
                    }
                    break;
            }

            try {
                const apiData = await axios({
                    method: 'post',
                    url: `https://smartsearchfiap.ddns.net/api/${api}`,
                    data: apiParameters,
                    headers: { 'x-api-key': 'QfatjqNAFBkAA40zON5z' }
                });

                reportData[api] = JSON.stringify(apiData.data);
            } catch (error) {
                reportData.apiError = true;
                errorCounter++;
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

        if (errorCounter === 10) {
            await Report.findByIdAndUpdate(reportId, { fatalApiError: true, processing: false });
        } else {
            await Report.findByIdAndUpdate(reportId, reportData);
        }
    }
};
