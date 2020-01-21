/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from './reducers';

const logger = (store) => (next) => (action) => {
  console.info('dispatching', action);
  console.info('prev state', store.getState());
  const result = next(action);
  console.info('next state', store.getState());
  return result;
};

const middlewares = [logger];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  createReducer(),
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);


export default store;
