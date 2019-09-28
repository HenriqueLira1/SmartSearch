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
            "autorizado_responsavel": {
                "identificacao": {
                    "cnpj": "20.501.854/0001-69",
                    "razao_social": "MARRETA ENGENHARIA E CONSTRUCAO LTD"
                },
                "dados_cadastrais_atualizados": {
                    "logradouro": "RUA TEODOLINO PEREIRA",
                    "bairo_distrito": "GRAO PARA",
                    "municipio": "TEOFILO OTONI",
                    "uf": "MINAS GERAIS",
                    "cep": "39.800-151"
                },
                "contato": {
                    "nome": "CRISTIANO ROMARIO RAMOS",
                    "cpf": "078.537.067-21",
                    "telefone": "00202",
                    "email": "CRISTIANOROMARIO@CONSTRUTORAMARRETA.COM.BR"
                }
            },
            "dados_da_empresa": {
                "cnae": "4120400"
            },
            "totais": {
                "num_admissoes": "80",
                "variacao_absoluta": "41",
                "total_vinculos": "420",
                "desligamentos": "39",
                "num_primeiro_dia": "379",
                "num_ultimo_dia": "420"
            },
            "ultima_atualizacao": "05/2019",
            "identificacao": {
                "nome": "KLAUDIO TAFFAREL",
                "pis": "PIS Base"
            },
            "dados_cadastrais": {
                "cpf": "360.123.198-74",
                "data_nascimento": "Data de Nascimento",
                "ctps": "CTPS/Série",
                "situacao_pis": "Faixa SUS",
                "nacionalidade": "Nacionalidade",
                "escolaridade": "SUPERIOR COMPLETO"
            },
            "tempo_trabalho": {
                "caged": "9",
                "rais": "118"
            },
            "historico_trabalho": {
                "0": {
                    "fonte": "RAIS",
                    "razao social": "RHBRASIL SERVICOS TEMPORARIOS LTDA",
                    "cnpj": "01.395.176/0016-39",
                    "cei": "",
                    "entrada": "03/08/2009",
                    "saida": "18/12/2009",
                    "situacao": "Fechado"
                },
                "1": {
                    "fonte": "RAIS",
                    "razao social": "RHBRASIL SERVICOS TEMPORARIOS LTDA",
                    "cnpj": "01.395.176/0016-39",
                    "cei": "",
                    "entrada": "03/08/2009",
                    "saida": "18/12/2009",
                    "situacao": "Fechado"
                }                
            }
        };    
    }
};