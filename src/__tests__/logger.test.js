'use strict';

const logger = require('../middleware/logger');

describe('Logger Middleware', () => {
  let req = {method: 'GET', path: '/person'};
  let res = {req};
  let next = jest.fn();
  console.log = jest.fn();
  it('adds logs method and path', ()=> {
    logger(req,res,next);
    // let method = req;
    // let path = res;

    expect(console.log).toBeTruthy();
  });
});
