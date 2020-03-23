import generateValuesArray from '../../helpers/generateValuesArray';

const INITIAL_STATE = {
    dataArray: generateValuesArray(30),
    arrayLength: 30,
    sortAlgo: '',
    isRunning: false
}

const settingReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'SET_ARRAY':
            return {
                ...state,
                dataArray: generateValuesArray(action.payload)    
            }
        case 'UPDATE_ARRAY':
                return {
                    ...state,
                    dataArray: action.payload    
            }  
        default:
            return state;
    }
}
export default settingReducer;