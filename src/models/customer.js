'use strict';

'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('villain', {
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
