const { where } = require('sequelize');
const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

// async IIFE
(async () => {
  await db.sequelize.sync({ force: true });

  try {
    await db.sequelize.authenticate();
    console.log('Connection to the database successful!');

    // CREATE (INSERT) RECORDS
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
    // console.log(moviesJSON);

    const personInstances = await Promise.all([
      Person.create({
        firstName: 'Frank',
        lastName: 'Darabont',
      }),
      Person.create({
        firstName: 'Francis',
        lastName: 'Ford Coppola',
      }),
      Person.create({
        firstName: 'Christopher',
        lastName: 'Nolan',
      }),
    ]);
    const peopleJSON = personInstances.map(person => person.toJSON());
    // console.log(peopleJSON);

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
    // console.log(movie5.toJSON());

    // RETRIVE (READING) RECORDS

    const movieById = await Movie.findByPk(1);
    // console.log(movieById.toJSON());

    const movieByRuntime = await Movie.findOne({ //returns the first matching record
      where: {
        runtime: 152,
      },
    });
    // console.log(movieByRuntime.toJSON());

    const movies = await Movie.findAll({
      attributes: ['id', 'title'], // return only id and title
      where: {
        isAvailableOnVHS: true,
      },
      order: [['releaseDate', 'ASC']]
    });
    // console.log(movies.map(movie => movie.toJSON()));

    const people = await Person.findAll({
      where: {
        firstName: 'Frank',
      }
    });
    // console.log(people.map(person => person.toJSON()));

    const movies2 = await Movie.findAll({
      attributes: ['id', 'title', 'runtime'],
      where: {
        runtime: {
          [Op.gt]: 140, // greater than
          [Op.lte]: 200, //  less than or equal to
        },
        isAvailableOnVHS: true
      },
      order: [['id', 'DESC']]
    });
    // console.log(movies2.map(movie => movie.toJSON()));

    // UPDATE RECORDS
    // 1. with save()

    const movie3 = await Movie.findByPk(3);
    movie3.rating = 9.1;
    await movie3.save();
    // console.log(movie3.get({ plain: true }));

    // 2. update()
    const movie4 = await Movie.findByPk(4);
    await movie4.update({
      rating: 9.1,
      isAvailableOnVHS: false,
    }, { fields: ['isAvailableOnVHS'] });
    // console.log(movie4.get({ plain: true })); //returns the same as calling .toJSON() – a plain object with just the model attributes and values


    // DELETE RECORDS
    const movieToDelete = await Movie.findByPk(1);
    await movieToDelete.destroy();

    const allMovies = await Movie.findAll();
    console.log(allMovies.map(movie => movie.toJSON()));

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();