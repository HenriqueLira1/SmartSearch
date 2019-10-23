module.exports = class Formatters {
    static formatName(name) {
        if (typeof name === 'string') {
            name = name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');
        }
        return name;
    }

    static formatValue(value) {
        if (typeof value === 'string') {
            value =
                value
                    .toLowerCase()
                    .replace(/_/g, ' ')
                    .charAt(0)
                    .toUpperCase() + value.slice(1);
        }
        return value;
    }
};
