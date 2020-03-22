import { combineReducers } from 'redux';

import selectionSortReducer from './selectionSort/reducer';

const rootReducer = combineReducers({
    selectionSortReducer
});

export default rootReducer;
