const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  // Movie model
  class Movie extends Sequelize.Model { }
  Movie.init({
    title: { type: Sequelize.STRING },
    year: { type: Sequelize.DATE },
    director: { type: Sequelize.STRING },
    rating: { type: Sequelize.FLOAT },
    runtime: { type: Sequelize.INTEGER },
    releaseDate: { type: Sequelize.DATEONLY },
    isAvailableOnVHS: { type: Sequelize.BOOLEAN }
  }, { sequelize });

  return Movie;
};