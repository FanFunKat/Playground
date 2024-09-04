const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  // Movie model
  class Movie extends Model { }
  Movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A movie title is required'
        },
        notEmpty: {
          msg: 'Please provide a movie title'
        }
      }
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A movie director is required'
        },
        notEmpty: {
          msg: 'Please provide a movie director'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A movie rating is required'
        },
        notEmpty: {
          msg: 'Please provide a movie rating'
        },
        min: 0.0,
        max: 10.0
      }
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A movie runtime is required'
        },
        notEmpty: {
          msg: 'Please provide a movie runtime'
        },
        min: {
          args: 1,
          msg: 'Please provide a value greater than "0" for "runtime"'
        }
      }
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A movie release date is required'
        },
        notEmpty: {
          msg: 'Please provide a movie release date'
        },
        isDate: {
          msg: 'Please provide a valid date'
        },
        isAfter: {
          args: '1895-12-27',
          msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',
        },
      }
    },
    isAvailableOnVHS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, { sequelize });

  return Movie;
};