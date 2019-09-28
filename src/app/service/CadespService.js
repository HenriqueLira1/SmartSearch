const axios = require('axios');

module.exports = {
    async search(req, res){
        // const data = req.body;

        // const response = await axios.postaxios.post('/localhost/fiap-ss/arpenp', {
        //         cnpj: 'BarBaz',
        //         name: 'FooBar'
        //     })
        //     .then(function (response) {
        //         return response.data;
        //     })
        //     .catch(function (error) {
        //         return error;
        //     });

        return {
            "IE": "143.289.040.112",
            "CNPJ": "19.811.201/0001-05",
            "Nome Empresarial": "LAMBDA CONSTRUTORA LTDA",
            "DRT": "DRTC-III - SÃO PAULO",
            "Situação": "Ativo",
            "Data da Inscrição no Estado": "28/02/2014",
            "Regime Estadual": "RPA",
            "Posto Fiscal": "PFC-10 - BUTANTÃ",
            "Data Início da IE": "28/02/2014",
            "NIRE": "35.2.2819796-1",
            "Situação Cadastral": "Ativo",
            "Data Início da Situação": "28/02/2014",
            "Ocorrência Fiscal": "Unidade produtiva",
            "Tipo de Unidade": "Estabelecimento Fixo",
            "Formas de Atuação": "Estabelecimento Fixo"
        };    
    }
};