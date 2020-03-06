let sequelize = require('./db.js');
const Products = sequelize.import('./product.js');

module.exports = {
    sequelize,
    Products
}
