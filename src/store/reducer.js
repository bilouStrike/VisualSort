import generateValuesArray from '../helpers/generateValuesArray';
import selectionSort from '../algorithm/selectionSort';

const INITIAL_STATE = {
    dataArray:generateValuesArray(10),
    lower : 0,
    currentI:0,
    currentJ:1,
    currentLower:0,
    sortMethod:'selection',
    swap: [],
    start: false
}

const sortReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'DO_START_SORT':
            return {
                ...state,
                start: !state.start,
            }
        case 'DO_SORT_SELECTION':
            return {
                ...state,
                dataArray: selectionSort(state.dataArray)
            }
        case 'UPDATE_J':
            return {
                ...state,
                currentJ:action.payload,
                dataArray: action.arrState
            }
        case 'UPDATE_LOWER':
            return {
                ...state,
                currentLower:action.payload,
                dataArray: action.arrState
            }
        case 'SWAP_OP':
            return {
                ...state,
                swap:action.payload,
                dataArray: action.arrState,
            }
        default:
            return state
    }
}

export default sortReducer;