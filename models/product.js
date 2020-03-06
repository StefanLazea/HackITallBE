module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products', {
        'name': DataTypes.STRING,
        'quantity': DataTypes.STRING,
        'price': DataTypes.INTEGER
    });
}