const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  // Movie model
  class Movie extends Sequelize.Model { }
  Movie.init({
    title: Sequelize.STRING,
    year: Sequelize.INTEGER,
    director: Sequelize.STRING,
    rating: Sequelize.INTEGER,
  }, { sequelize });

  return Movie;
};