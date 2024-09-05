const db = require('./db');
const { Movie, Person } = db.models;

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
    ]);
    const moviesJSON = movieInstances.map(movie => movie.toJSON());
    console.log(moviesJSON);

    const personInstances = await Promise.all([
      Person.create({
        first_name: 'Frank',
        last_name: 'Darabont',
      }),
      Person.create({
        first_name: 'Francis',
        last_name: 'Ford Coppola',
      }),
      Person.create({
        first_name: 'Christopher',
        last_name: 'Nolan',
      }),
    ]);
    const peopleJSON = personInstances.map(person => person.toJSON());
    console.log(peopleJSON);

    // New instance
    //build() is useful when you need to manipulate instances in any way before storing them. build() would also be useful when you need a model instance to bind to a template (for example, a "New Record" form or page). You can create and then save a database object from the data bound to the template.
    const movie5 = await Movie.build({ //stores data in memory only
      title: 'Toy Story 3',
      director: 'Lee Unkrich',
      rating: 8.3,
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    await movie5.save(); // save the record
    console.log(movie5.toJSON());

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();