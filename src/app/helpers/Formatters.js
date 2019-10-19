module.exports = class ApisService {
    static formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');
    }

    static formatValue(value) {
        return (
            value
                .toLowerCase()
                .replace(/_/g, ' ')
                .charAt(0)
                .toUpperCase() + value.slice(1)
        );
    }
};
