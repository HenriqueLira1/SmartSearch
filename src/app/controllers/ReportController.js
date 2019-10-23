const Report = require('../models/Report');
const User = require('../models/User');
const formatDate = require('date-format');
const Formatters = require('../helpers/Formatters');

module.exports = {
    async index(req, res) {
        const { name: user, email } = req.user;

        const userModel = await User.findOne({ email });

        let reports;

        if (userModel.accessGroup === 1) {
            reports = await Report.find();
        } else {
            reports = await Report.find({ user });
        }

        const formatedReports = reports.map(report => {
            const createdAt = formatDate('dd/MM/yyyy hh:mm', new Date(report.createdAt));

            return {
                name: report.name,
                cpf: report.cpf,
                createdAt,
                id: report.id,
                processing: report.processing,
                apiError: report.apiError,
                fatalApiError: report.fatalApiError
            };
        });

        return res.marko(require('../views/reports/reports.marko'), { reports: formatedReports });
    },
    async show(req, res) {
        const reportId = req.params.id;
        const report = await Report.findById(reportId);

        const formatedData = [];

        const validProperties = [
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
            'escavador'
        ];

        for (const sourceName in report) {
            const isPropertyValid = validProperties.indexOf(sourceName) !== -1 && report[sourceName];

            if (isPropertyValid) {
                const childData = JSON.parse(report[sourceName]);
                const dataSource = {};

                dataSource.name = Formatters.formatName(sourceName);
                dataSource.data = [];

                for (const childName in childData) {
                    let childValue = childData[childName];

                    let childObject = {};

                    if (typeof childValue === 'object' && childValue !== null) {
                        let childValueObjects = [];

                        for (const grandChildName in childValue) {
                            let grandChildValue = childValue[grandChildName];

                            if (typeof grandChildValue === 'object' && grandChildValue !== null) {
                                let grandChildValueObjects = [];

                                for (const greatGrandChildName in grandChildValue) {
                                    let greatGrandChildValue = grandChildValue[greatGrandChildName];

                                    if (typeof greatGrandChildValue !== 'object') {
                                        const greatGrandChildObject = {
                                            name: Formatters.formatName(greatGrandChildName),
                                            value: Formatters.formatValue(greatGrandChildValue)
                                        };

                                        grandChildValueObjects.push(greatGrandChildObject);
                                    }
                                }

                                const grandChildObject = {
                                    name: Formatters.formatName(grandChildName),
                                    value: grandChildValueObjects
                                };

                                childValueObjects.push(grandChildObject);
                            } else {
                                const grandChildObject = {
                                    name: Formatters.formatName(grandChildName),
                                    value: Formatters.formatValue(grandChildValue)
                                };

                                childValueObjects.push(grandChildObject);
                            }
                        }

                        childObject = {
                            name: Formatters.formatName(childName),
                            value: childValueObjects
                        };
                    } else {
                        childObject = {
                            name: Formatters.formatName(childName),
                            value: Formatters.formatValue(childValue)
                        };
                    }

                    dataSource.data.push(childObject);
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
