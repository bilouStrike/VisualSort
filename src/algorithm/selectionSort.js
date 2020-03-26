import { do_update_j, do_update_lower, do_swap } from '../store/selectionSort/actions';
import { update_array, set_sorted, set_running } from '../store/settings/actions';

function selectionSort(array, speed, dispatch) {
    let arr = array.slice(0);
    let DispatchSignal = [];
    doSelectionSort(arr, DispatchSignal);
    runDispatch(arr, DispatchSignal, speed, dispatch);  
    return arr;  
}

function doSelectionSort(arr, DispatchSignal) {
    for ( var i = 0; i < arr.length; i++ ) {
        var lowest = i;
        for ( var j = i+1; j < arr.length; j++ ) {
            if (arr[j] < arr[lowest]) {
                lowest = j; 
                DispatchSignal.push({ action:'UPDATE_LOWER', value:lowest });
                DispatchSignal.push({ action:'UPDATE_ARRAY', value: arr.slice(0) });
            }
            DispatchSignal.push({ action:'UPDATE_J', value:j});
        }
        if ( i !== lowest ) {
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            DispatchSignal.push({ action:'SWAP_OP', value:[i,lowest] });
            DispatchSignal.push({ action:'SWAP_OP', value:[] });
            DispatchSignal.push({ action:'UPDATE_ARRAY', value: arr.slice(0) });
        }
    }
}

function runDispatch(array, DispatchSignal, speed, dispatch) {
    if (!DispatchSignal.length) {
        dispatch(set_running(false));
        dispatch(do_update_j(0));
        dispatch(do_update_lower(0));
        dispatch(set_sorted(true));
        return;
    } 
   
    let action = DispatchSignal.shift();

    switch (action.action) {
        case 'UPDATE_J':
                dispatch(do_update_j(action.value))
            break;
        case 'UPDATE_LOWER':
                dispatch(do_update_lower(action.value))
            break;
        case 'SWAP_OP':
                dispatch(do_swap(action.value))
            break;
        case 'UPDATE_ARRAY':
                dispatch(update_array(action.value))
            break;
            default:
    }
    setTimeout(() => {
        runDispatch(array, DispatchSignal, speed, dispatch);
    }, speed);
}

export default selectionSort;