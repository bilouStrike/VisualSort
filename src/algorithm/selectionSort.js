import { do_update_j, do_update_lower } from '../store/actions';

function selectionSort(array, dispatch, isStart) {
    let arr = array.slice();
    let DispatchSignal = [];
    doSelectionSort(arr, DispatchSignal);
    runDispatch( arr, DispatchSignal, dispatch, isStart);  
    return arr;  
}

function doSelectionSort(arr, DispatchSignal) {
    for ( var i = 0; i < arr.length; i++ ) {
        var lowest = i;
        for ( var j = i+1; j < arr.length; j++ ) {
            DispatchSignal.push({ action:'UPDATE_J', value:j , lastarr: arr });
            if (arr[j] < arr[lowest]) {
                lowest = j;
                DispatchSignal.push({ action:'UPDATE_LOWER', value:lowest, lastarr: arr });
            }
        }
        if ( i !== lowest ) {
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
}

function runDispatch(array, DispatchSignal, dispatch) {
    if ( !DispatchSignal.length) return;

    let action = DispatchSignal.shift();

    switch (action.action) {
        case 'UPDATE_J':
                dispatch(do_update_j(action.value, action.lastarr))
            break;
        case 'UPDATE_LOWER':
                dispatch(do_update_lower(action.value, action.lastarr))
            break;

        default:
            break;
    }

    setTimeout(() => {
        runDispatch(array, DispatchSignal, dispatch);
    }, 200);
}

export default selectionSort;