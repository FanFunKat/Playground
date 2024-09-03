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
  await sequelize.sync();
  try {
    await sequelize.authenticate({ forse: true });
    // console.log('Connection to the database successful!');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();