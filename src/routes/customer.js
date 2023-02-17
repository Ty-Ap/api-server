'use strict';

const express = require('express');

const {customerCollection} = require('../models');

const router = express.Router();

router.get('/customer', async(req, res, next)=> {
  const customers = await customerCollection.read();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req,res,next) => {
  const singleCustomer = await customerCollection.read(req.params.id);
  res.status(200).send(singleCustomer);
});

router.post('/customer', async(req,res,next)=> {
  try {
    const newCustomer = await customerCollection.create(req.body);
    res.status(200).send(newCustomer);
  } catch (e) {
    next(e);
  }

});

module.exports = router;
