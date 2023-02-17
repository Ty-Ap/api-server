'use strict';


const logger = (req, res, next) => {
  let method = req.method;
  let path = req.path;

  console.log ({method, path});
  next();
};

module.exports = logger;
