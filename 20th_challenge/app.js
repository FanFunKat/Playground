const db = require('./db');
const { Movie } = db.models;

// async IIFE
(async () => {
  await db.sequelize.sync({ force: true });

  try {
    await db.sequelize.authenticate();
    console.log('Connection to the database successful!');
    const movieInstances = await Promise.all([
      Movie.create({
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        rating: 9.3,
        runtime: 142,
        releaseDate: '1994-10-14',
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        rating: 9.2,
        runtime: 175,
        releaseDate: '1972-03-24',
        isAvailableOnVHS: false,
      }),
      Movie.create({
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        rating: 9.0,
        runtime: 152,
        releaseDate: '2008-07-18',
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'The Godfather: Part II',
        director: 'Francis Ford Coppola',
        rating: 9.0,
        runtime: 202,
        releaseDate: '1974-12-20',
        isAvailableOnVHS: true,
      })
    ])
    const moviesJSON = movieInstances.map(movie => movie.toJSON());
    console.log(moviesJSON);

    // const movie = await Movie.create({
    //   title: 'The Shawshank Redemption',
    //   year: 1994,
    //   director: 'Frank Darabont',
    //   rating: 9.3,
    //   runtime: 142,
    //   releaseDate: '1994-10-14',
    //   isAvailableOnVHS: true,
    // });
    // console.log(movie.toJSON());

    // const movie2 = await Movie.create({
    //   title: 'The Godfather',
    //   year: 1972,
    //   director: 'Francis Ford Coppola',
    //   rating: 9.2,
    //   runtime: 175,
    //   releaseDate: '1972-03-24',
    //   isAvailableOnVHS: false,
    // });
    // console.log(movie2.toJSON());

    // const movie3 = await Movie.create({
    //   title: 'The Dark Knight',
    //   year: 2008,
    //   director: 'Christopher Nolan',
    //   rating: 9.0,
    //   runtime: 152,
    //   releaseDate: '2008-07-18',
    //   isAvailableOnVHS: true,
    // })
    // console.log(movie3.toJSON());

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();