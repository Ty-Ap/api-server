'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('hero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
