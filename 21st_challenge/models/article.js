'use strict';
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Article extends Model { }
  Article.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  }, { sequelize });
  return Article;
};