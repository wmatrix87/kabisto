import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from './reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  console.log('prev state', store.getState());
  let result = next(action);
  console.log('next state', store.getState());
  return result
};

const middlewares = [logger];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  createReducer(),
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);


export default store;
