const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

  class Person extends Model { }
  Person.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A first name  is required'
        },
        notEmpty: {
          msg: 'Please provide a first name'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A last name  is required'
        },
        notEmpty: {
          msg: 'Please provide a last name'
        }
      }
    },
  }, {
    timestamps: false,
    sequelize
  });

  return Person;
};