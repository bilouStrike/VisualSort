import generateValuesArray from '../helpers/generateValuesArray';
import selectionSort from '../algorithm/selectionSort';

const INITIAL_STATE = {
    dataArray: {
            data: generateValuesArray(10),
            lower : 0,
            currentIndice:0,
            currentIndice2:1
        },
    sortMethod:'selection',
    start: false,
}

const sortReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'DO_START_SORT':
            return {
                ...state,
                start: !state.start
            }
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