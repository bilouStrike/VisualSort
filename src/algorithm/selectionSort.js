import { do_update_j, do_update_lower, do_swap } from '../store/selectionSort/actions';
import { update_array } from '../store/settings/actions';

function selectionSort(array, dispatch) {
    let arr = array.slice(0);
    let DispatchSignal = [];
    doSelectionSort(arr, DispatchSignal);
    runDispatch( arr, DispatchSignal, dispatch);  
    return arr;  
}

function doSelectionSort(arr, DispatchSignal) {
    for ( var i = 0; i < arr.length; i++ ) {
        var lowest = i;
        for ( var j = i+1; j < arr.length; j++ ) {
            DispatchSignal.push({ action:'UPDATE_J', value:j , lastarr: arr.slice(0) });
            if (arr[j] < arr[lowest]) {
                lowest = j; 
                DispatchSignal.push({ action:'UPDATE_LOWER', value:lowest });
                DispatchSignal.push({ action:'UPDATE_ARRAY', value: arr.slice(0) });
            }
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

function runDispatch(array, DispatchSignal, dispatch) {
    if ( !DispatchSignal.length ) return;

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
        default:
            break;
    }
    setTimeout(() => {
        runDispatch(array, DispatchSignal, dispatch);
    }, 50);
}

export default selectionSort;