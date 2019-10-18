const { Schema, model } = require('mongoose');

const ReportSchema = new Schema(
    {
        arpenp: String,
        cadesp: String,
        caged: String,
        censec: String,
        detran: String,
        infocrim: String,
        jucesp: String,
        siel: String,
        sivec: String
    },
    {
        timestamps: true
    }
);

module.exports = model('Report', ReportSchema);
