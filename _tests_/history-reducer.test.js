import historyReducer from './../src/reducers/history-reducer.js';

describe('historyReducer', () => {
  test('SHould return default state if no action type is recognized', ()=> {
    expect(historyReducer()).toEqual({history: [{
      squares: Array(9).fill(null),
    }]});
  });
});
