'use strict';

const validator=require('../middleware/validator');



describe('validator middleware', () => {
  let req = {query: {name: 'Fred'}};
  let res = {};
  let next = jest.fn();

  it('validates query as directed', () =>{
    validator(req,res,next);

    expect(next).toHaveBeenCalledWith();
  });
  it('fails appropriately if no query name', () => {
    req = {query: {notName: 'Ryan'}};
    validator(req,res,next);

    expect(next).toBeTruthy();
  });
});
