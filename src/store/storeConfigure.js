import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from '../reducers/index';

const storeConfigure = () => {
  // const store = createStore(rootReducer, devToolsEnhancer());
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};

export default storeConfigure;
