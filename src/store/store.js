import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import sortReducer from './reducer';
const middleWare = [logger];

const store = createStore(sortReducer, applyMiddleware(...middleWare));
export default store;
