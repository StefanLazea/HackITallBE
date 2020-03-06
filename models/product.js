module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products', {
        'name': DataTypes.STRING,
        'quantity': DataTypes.INTEGER,
        'price': DataTypes.INTEGER,
        'imgPath': DataTypes.STRING
    });
}