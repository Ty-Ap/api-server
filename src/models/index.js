'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const customer = require('./customer');
const hero = require('./hero');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;


// if sqlite:memory doesnt work, use  sqlite::memory

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, DataTypes);

const heroModel = hero(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  customerCollection: new Collection(customerModel),
  heroCollection: new Collection(heroModel),
};
