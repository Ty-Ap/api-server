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

  it ('creates a villain', async ()=> {
    const response = await request.post('/customer').send({
      name: 'Darth Vader',
      type: 'villain',
    });
    const responseTwo = await request.post('/customer').send({
      name: 'Elon Musk',
      type: 'villain',
    });

    expect(response.body.name).toEqual('Darth Vader');
    expect(responseTwo.body.name).toEqual('Elon Musk');
    expect(response.body.type).toEqual('villain');
  });

  it ('assembles all villains', async ()=> {
    const response = await request.get('/customer');

    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].name).toEqual('Darth Vader');
    expect(response.body[1].name).toEqual('Elon Musk');
  });

  it('updates customer by id', async () => {
    const response = await request.put('/customer/1').send({
      name: 'Lex Luthor',
      type: 'villain',
    });
    const responseTwo = await request.get('/customer/1');
    expect(response.status).toBe(200);
    expect(responseTwo.body.name).toEqual('Lex Luthor');
  });

  it ('deletes by id', async ()=>{
    const response = await request.delete('/customer/1');

    expect(response.status).toEqual(200);

  });
});






