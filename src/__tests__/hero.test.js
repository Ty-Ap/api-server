const { app } = require('../server');
const supertest = require('supertest');
const {sequelizeDatabase} = require('../models');
const request = supertest(app);


beforeAll(async () =>{
  await sequelizeDatabase.sync();

});

afterAll(async () =>{
  await sequelizeDatabase.drop();
});

describe('Hero route', ()=> {
  it ('creates a hero', async ()=> {
    const response = await request.post('/hero').send({
      name: 'Spiderman',
      type: 'hero',
    });
    const responseTwo = await request.post('/hero').send({
      name: 'Captain Marvel',
      type: 'hero',
    });

    expect(response.body.name).toEqual('Spiderman');
    expect(responseTwo.body.name).toEqual('Captain Marvel');
    expect(response.body.type).toEqual('hero');
  });

  it ('assembles all heroes', async ()=> {
    const response = await request.get('/hero');

    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].name).toEqual('Spiderman');
    expect(response.body[1].name).toEqual('Captain Marvel');
  });

  it('updates hero by id', async () => {
    const response = await request.put('/hero/1').send({
      name: 'Anakin',
      type: 'hero',
    });
    const responseTwo = await request.get('/hero/1');
    expect(response.status).toBe(200);
    expect(responseTwo.body.name).toEqual('Anakin');
  });

  it ('deletes by id', async ()=>{
    const response = await request.delete('/hero/1');

    expect(response.status).toEqual(200);

  });
});

