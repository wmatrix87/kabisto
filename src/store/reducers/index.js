const { combineReducers } = require('redux');

const emptyReducer = {
  empty: () => null,
};


const createReducer = (asyncReducers = emptyReducer) => combineReducers({
  ...emptyReducer,
  ...asyncReducers,
});

module.exports = createReducer;
