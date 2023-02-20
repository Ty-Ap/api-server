'use strict';

const express = require('express');

const { customerCollection } = require('../models');
const logger = require('../middleware/logger');

const router = express.Router();

router.get('/customer', async(req, res, next)=> {
  const customers = await customerCollection.read();
  res.status(200).send(customers);
});

// router.get('/customer/:id', async (req,res,next) => {
//   const singleCustomer = await customerCollection.read(req.params.id);
//   res.status(200).send(singleCustomer);
// });

router.post('/customer',logger, async(req,res,next)=> {
  try {
    const newCustomer = await customerCollection.create(req.body);
    res.status(201).send(newCustomer);
  } catch (e) {
    next(e);
  }

  router.get('/customer/:id', async (req, res, next) => {
    try {
      const villain = await customerCollection.read(req.params.id);
      res.status(200).send(villain);
    } catch (error) {
      next(error);
    }
  });

  router.put('/customer/:id', async (req, res, next) => {
    try {
      const updatedVillain = await customerCollection.update(req.body, req.params.id);
      res.status(200).send(updatedVillain);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/customer/:id', async (req, res, next) => {
    try {
      await customerCollection.delete(req.params.id);
      res.status(200).send('Deleted Villain');
    } catch (error) {
      next(error);
    }
  });

});

module.exports = router;
