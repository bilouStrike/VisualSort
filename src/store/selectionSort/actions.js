export const do_select_sort = () => ({
    type: 'DO_SORT_SELECTION'
});

export const do_start_sort = () => ({
    type: 'DO_START_SORT'
});

export const do_update_j =  newJ => ({
    type: 'UPDATE_J',
    payload: newJ,
});

export const do_update_lower = lower => ({
    type: 'UPDATE_LOWER',
    payload: lower,
});

export const do_swap = swap => ({
    type: 'SWAP_OP',
    payload: swap,
});

