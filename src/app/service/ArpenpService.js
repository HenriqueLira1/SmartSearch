const axios = require('axios');

module.exports = {
    async search(data) {
        return {
            cartorio_id: '110',
            busca_juiz_id: '1997333',
            tipo_registro: 'C',
            nome_registrado_1: 'Antonio TORRES Coutinho',
            nome_registrado_2: 'Ellen MARCIA FERNANDES SILVEIRA',
            novo_nome_registrado_1: '',
            novo_nome_registrado_2: 'Ellen MARCIA FERNANDES SILVEIRA Coutinho',
            data_ocorrido: '19/03/2015',
            data_registro: '19/03/2015',
            num_livro: '00133',
            num_folha: '237',
            num_registro: '0039194',
            matricula: '11914901552015200133237003919491',
            nome_requerente: 'Antonio Torres Coutinho',
            documento_requerente: '',
            telefone_requerente: '(11) 3119-7142',
            btn_certidao: 'Solicitar segunda Via de certidao'
        };
    }
};
