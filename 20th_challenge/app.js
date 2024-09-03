const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db'
});

// Movie model
class Movie extends Sequelize.Model { }
Movie.init({
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  director: Sequelize.STRING,
  rating: Sequelize.INTEGER,
}, { sequelize }
);

// async IIFE
(async () => {
  await sequelize.sync({ forse: true });
  try {
    // Instance of the Movie class represents a database row
    const movie = await Movie.create({
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      rating: 9.2,
    });
    console.log(movie.toJSON());
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();