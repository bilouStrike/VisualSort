import generateValuesArray from '../helpers/generateValuesArray';
import selectionSort from '../algorithm/selectionSort';

const INITIAL_STATE = {
    dataArray: generateValuesArray(20),
    sortMethod:'selection',
    start: false
}

const sortReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) { 
        case 'DO_SORT_SELECTION':
            return {
                ...state,
                dataArray: selectionSort(state.dataArray)
            }
        default:
            return state
    }
}

export default sortReducer;