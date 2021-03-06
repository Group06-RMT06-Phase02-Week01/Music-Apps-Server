'use strict';
//const helpbcrypt = require('../helpers/bcrypt')
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  //User.beforeCreate((instance, options) => {
  //  const salt = bcrypt.genSaltSync(10)
  //  const hash = bcrypt.hashSync(instance.password, salt)
  //  instance.password = hash
  //});
  return User;
};