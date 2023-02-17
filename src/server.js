'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');



const app = express();

app.get('/', logger, (req,res,next) => {
  res.status(200).send(req.log);
});

app.get('/person', logger,(req,res,next)=> {
  if (!req.query.name){
    next();
  }

  const name = `${req.query.name}`;
  const output = { name };
  res.status(200).json(output);

});

app.get('/bad', (req,res,next) => {
  next('this is Errortown. population you');

});

app.use('*',notFound);
app.use(errorHandler);

const start = (PORT) =>{
  app.listen(PORT,()=>console.log(`congrats youve got thumbs aka an active server on port ${PORT}`));
};

module.exports ={start, app};
