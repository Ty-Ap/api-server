'use strict';

const {app} = require('../server.js');
const supertest = require('supertest');
const {sequelizeDatabase} = require('../models');
const request = supertest(app);

beforeAll(async () =>{
  await sequelizeDatabase.sync();

});

afterAll(async () =>{
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('creates a villain', async () => {
    const response = await request.post('/customer').send({
      name: 'villain',
      type: 'test',
    });

    expect(response.body.name).toEqual('villain');
  });
});






