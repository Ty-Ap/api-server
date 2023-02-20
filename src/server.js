'use strict';
require('dotenv').config();

const express = require('express');

const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500.js');
const customer = require('./routes/customer');


const app = express();
app.use(express.json());
app.use(customer);

app.get('/', logger, (req,res,next) => {
  res.status(200).send('/ success');
});


app.get('/person', logger,(req,res,next)=> {
  if (!req.query.name){
    next();
  }

  const name = `${req.query.name}`;
  const output = { name };
  res.status(200).json(output);

});






function start(PORT){
  app.listen(PORT,()=>console.log(`congrats youve got thumbs aka an active server on port ${PORT}`));
}
app.get('/bad',errorHandler);
app.get('*',notFound);



module.exports ={start, app};
