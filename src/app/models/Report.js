const { Schema, model } = require('mongoose');

const ReportSchema = new Schema(
    {
        user: String,
        name: String,
        cpf: String,
        arisp: String,
        arpenp: String,
        cadesp: String,
        caged: String,
        censec: String,
        detran: String,
        infocrim: String,
        jucesp: String,
        siel: String,
        sivec: String,
        'bolsa-familia': String,
        escavador: String,
        jusbrasil: String,
        processing: Boolean,
        apiError: Boolean,
        fatalApiError: Boolean
    },
    {
        timestamps: true
    }
);

module.exports = model('Report', ReportSchema);
