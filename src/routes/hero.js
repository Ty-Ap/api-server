'use strict';

const express = require('express');

const { heroCollection } = require('../models');

const router = express.Router();

router.get('/hero', async (req, res, next) => {
  const heroes = await heroCollection.read();
  res.status(200).send(heroes);
});

router.post('/hero', async (req, res, next) => {
  try {
    const newhero = await heroCollection.create(req.body);
    res.status(201).send(newhero);
  } catch (error) {
    next(error);
  }
});

router.get('/hero/:id', async (req, res, next) => {
  try {
    const hero = await heroCollection.read(req.params.id);
    res.status(200).send(hero);
  } catch (error) {
    next(error);
  }
});

router.put('/hero/:id', async (req, res, next) => {
  try {
    const updatedhero = await heroCollection.update(req.body, req.params.id);
    res.status(200).send(updatedhero);
  } catch (error) {
    next(error);
  }
});

router.delete('/hero/:id', async (req, res, next) => {
  try {
    await heroCollection.delete(req.params.id);
    res.status(200).send('Deleted hero');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
