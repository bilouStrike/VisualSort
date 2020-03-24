
const INITIAL_STATE = {
    lower : 0,
    currentI:0,
    currentJ:0,
    currentLower:0,
    swap: [],
}

const sortReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'DO_START_SORT':
            return {
                ...state,
                start: !state.start,
            }
        case 'UPDATE_J':
            return {
                ...state,
                currentJ:action.payload,
            }
        case 'UPDATE_LOWER':
            return {
                ...state,
                currentLower:action.payload,
            }
        case 'SWAP_OP':
            return {
                ...state,
                swap:action.payload,
            }
        default:
            return state
    }
}

export default sortReducer;
