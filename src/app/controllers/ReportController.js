const Arpenp = require('../service/ArpenpService');
const Cadesp = require('../service/CadespService');
const Caged = require('../service/CagedService');

module.exports = {
    index(req, res) {
        return res.marko(require('../views/reports/reports.marko'));
    },
    async show(req, res) {
        const arenspData = await Arpenp.search({});

        const cadespData = await Cadesp.search({});

        const cagedData = await Caged.search({});

        const data = {
            arpenp: arenspData,
            cadesp: cadespData,
            caged: cagedData
        };

        const formatedData = [];

        for (const sourceName in data) {
            const dataSource = {};

            dataSource.name = sourceName.charAt(0).toUpperCase() + sourceName.slice(1);
            dataSource.data = [];

            const childData = data[sourceName];

            for (const childDataName in childData) {
                let childDataValue = childData[childDataName];
                let childDataObject = {};

                if (typeof childDataValue === 'object' && childDataValue !== null) {
                    let childDataValueObjects = [];
                    for (const grandChildName in childDataValue) {
                        childDataValue[grandChildName] = childDataValue[grandChildName].toLowerCase().replace(/_/g, ' ');
                        childDataValue[grandChildName] =
                            childDataValue[grandChildName].charAt(0).toUpperCase() + childDataValue[grandChildName].slice(1);

                        const grandChildObject = {
                            name: grandChildName.charAt(0).toUpperCase() + grandChildName.slice(1).replace(/_/g, ' '),
                            value: childDataValue[grandChildName]
                        };
                        childDataValueObjects.push(grandChildObject);
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

        return res.marko(require('../views/reports/detail/report_detail.marko'), {
            name: 'Klaudio Taffarel',
            reportData: formatedData
        });
    }
};
