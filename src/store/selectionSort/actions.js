export const do_select_sort = () => ({
    type: 'DO_SORT_SELECTION'
});

export const do_start_sort = () => ({
    type: 'DO_START_SORT'
});

export const do_update_j = (newJ, arr) => ({
    type: 'UPDATE_J',
    payload: newJ,
    arrState:arr
});

export const do_update_lower = (lower, arr) => ({
    type: 'UPDATE_LOWER',
    payload: lower,
    arrState:arr
});

export const do_swap = (swap, arr) => ({
    type: 'SWAP_OP',
    payload: swap,
    arrState:arr
});

