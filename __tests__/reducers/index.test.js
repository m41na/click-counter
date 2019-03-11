import reducer from '#/reducers';
import {INCR, DECR, RESET } from '#/actions/index';

describe('distance reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ distance: {value: 0 } });
  });

  const initialValue = {distance : {value: 0}};

  it('should handle INCR, DECR and RESET actions', () => {
    expect(
      reducer(initialValue, {
        type: INCR
      })
    ).toEqual({ distance: {value : 1} } );

    expect(
      reducer({ distance: {value : 21} } , {
          type: DECR
        })
    ).toEqual({ distance: {value : 20 } });

    expect(
        reducer(initialValue, {
          type: RESET
        })
      ).toEqual({ distance: {value : 0} } );
  });
});