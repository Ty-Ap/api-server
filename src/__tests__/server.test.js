const { app } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response).toBeTruthy();
  });

  test('handles invalid req', async () => {
    const response = await mockRequest.get('/oops');
    expect(response.status).toEqual(404);
  });

  test('handles error', async ()=> {
    const response = await mockRequest.get('/bad');
    console.log(response);

    expect(response.status).toEqual(500);
    expect(response.text).toBeTruthy();
  });

  test('handles person post route', async () => {
    const response = await mockRequest.get('/person?name=Fred');
    let nameJson = JSON.stringify({name: 'Fred'});

    expect(response.text).toEqual(nameJson);
  });

});
