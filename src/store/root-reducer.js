import { combineReducers } from 'redux';

import selectionSortReducer from './selectionSort/reducer';
import settingReducer from './settings/reducer';

const rootReducer = combineReducers({
    settingReducer,
    selectionSortReducer
});

export default rootReducer;
