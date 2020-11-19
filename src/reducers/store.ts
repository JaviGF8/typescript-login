import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '.';

const middlewares = [ thunkMiddleware ];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
