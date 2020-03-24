import generateValuesArray from '../../helpers/generateValuesArray';

const INITIAL_STATE = {
    dataArray: generateValuesArray(30),
    arrayLength: 30,
    sortAlgo: '',
    isRunning: false,
    isSorted: false
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
        case 'SET_ARRAY_LENGTH':
            return {
                ...state,
                arrayLength: action.payload
            }
        case 'SET_RUNNING':
            return {
                ...state,
                isRunning:action.payload
            }
        case 'SET_SORTED':
            return {
                ...state,
                isSorted:action.payload
            }
        default:
            return state;
    }
}
export default settingReducer;