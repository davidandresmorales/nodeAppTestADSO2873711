'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/indzzex` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Article, {
        through: 'articleCategories', // Tabla intermedia
        as: 'articles', // Nombre del alias para la relación
      });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};