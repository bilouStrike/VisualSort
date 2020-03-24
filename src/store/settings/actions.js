export const update_array = array => ({
    type: 'UPDATE_ARRAY',
    payload: array
});

export const set_array = array => ({
    type: 'SET_ARRAY',
    payload: array
});

export const set_array_length = length => ({
    type: 'SET_ARRAY_LENGTH',
    payload: length
});

export const set_running = value => ({
    type: 'SET_RUNNING',
    payload: value
});

export const set_sorted = value => ({
    type: 'SET_SORTED',
    payload: value
});
