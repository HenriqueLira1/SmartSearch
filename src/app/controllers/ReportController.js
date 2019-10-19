const Report = require('../models/Report');
const format = require('date-format');

module.exports = {
    async index(req, res) {
        const reports = await Report.find();

        const formatedReports = reports.map(report => {
            const createdAt = format('dd/MM/yyyy hh:mm', new Date(report.createdAt));

            return {
                name: report.name,
                cpf: report.cpf,
                createdAt,
                id: report.id
            };
        });

        return res.marko(require('../views/reports/reports.marko'), { reports: formatedReports });
    },
    async show(req, res) {
        const reportId = req.params.id;
        const report = await Report.findById(reportId);

        const formatedData = [];

        const validProperties = ['arisp', 'arpenp', 'cadesp', 'caged', 'censec', 'detran', 'infocrim', 'jucesp', 'siel', 'sivec'];

        for (const sourceName in report) {
            const isPropertyValid = validProperties.indexOf(sourceName) !== -1 && report[sourceName];

            if (isPropertyValid) {
                const childData = JSON.parse(report[sourceName]);
                const dataSource = {};

                dataSource.name = sourceName.charAt(0).toUpperCase() + sourceName.slice(1);
                dataSource.data = [];

                for (const childDataName in childData) {
                    let childDataValue = childData[childDataName];

                    let childDataObject = {};

                    if (typeof childDataValue === 'object' && childDataValue !== null) {
                        let childDataValueObjects = [];

                        for (const grandChildName in childDataValue) {
                            let grandChildValue = childDataValue[grandChildName];

                            if (typeof grandChildValue !== 'object') {
                                grandChildValue = grandChildValue.toLowerCase().replace(/_/g, ' ');
                                grandChildValue = grandChildValue.charAt(0).toUpperCase() + grandChildValue.slice(1);

                                const grandChildObject = {
                                    name: grandChildName.charAt(0).toUpperCase() + grandChildName.slice(1).replace(/_/g, ' '),
                                    value: grandChildValue
                                };
                                childDataValueObjects.push(grandChildObject);
                            }
                        }

                        childDataObject = {
                            name: childDataName.charAt(0).toUpperCase() + childDataName.slice(1).replace(/_/g, ' '),
                            value: childDataValueObjects
                        };
                    } else {
                        childDataValue = childDataValue.toLowerCase().replace(/_/g, ' ');
                        childDataValue = childDataValue.charAt(0).toUpperCase() + childDataValue.slice(1);

                        childDataObject = {
                            name: childDataName.charAt(0).toUpperCase() + childDataName.slice(1).replace(/_/g, ' '),
                            value: childDataValue
                        };
                    }

                    dataSource.data.push(childDataObject);
                }

                formatedData.push(dataSource);
            }
        }

        return res.marko(require('../views/reports/detail/report_detail.marko'), {
            name: report.name,
            reportData: formatedData
        });
    }
};
