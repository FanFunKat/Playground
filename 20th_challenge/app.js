const db = require('./db');
const { Movie } = db.models;

// async IIFE
(async () => {
  await db.sequelize.sync({ forse: true });
  try {
    const movieInstance = await Promise.all([
      Movie.create({
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        rating: 9.3,
      }),
      Movie.create({
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        rating: 9.2,
      }),
      Movie.create({
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        rating: 9.0,
      }),
      Movie.create({
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        rating: 9.0,
      }),
      Movie.create({
        title: '12 Angry Men',
        year: 1957,
        director: 'Sidney Lumet',
        rating: 8.9,
      }),
    ]);
    console.log(movieInstance);
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();