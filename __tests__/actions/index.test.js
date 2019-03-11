import {INCR, DECR, RESET, incrAction, decrAction, resetAction } from '#/actions/index';

describe('incrAction action', () => {
  it('should create an action to increment distance', () => {
    const expectedAction = {
      type: INCR
    }
    expect(incrAction()).toEqual(expectedAction);
  });
});

describe('decrAction action', () => {
  it('should create an action to increment distance', () => {
    const expectedAction = {
      type: DECR
    }
    expect(decrAction()).toEqual(expectedAction);
  });
});

describe('resetAction action', () => {
  it('should create an action to reset the distance', () => {
    const expectedAction = {
      type: RESET
    }
    expect(resetAction()).toEqual(expectedAction);
  });
});