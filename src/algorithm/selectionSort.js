const selectionSort = (arrr) => {
    let arr = arrr.data.slice();
    console.log(arrr);

    const ii = arrr.currentIndice;
    const jj = arrr.currentIndice2;

    

    for( var i = ii; i < arr.length; i++ ) {
        var lowest = i;
        for( var j = jj+1; j <= arr.length; j++ ) {

            console.log('J insdei loop :' +j );

            if( arr[j] < arr[lowest] )  {
                lowest = j ;
            }

            /*if ( jj < arr.length ) {
                console.log('current ii' +ii);
                console.log('current jj' +jj);
                return {
                    data:[...arr],
                    lowest: lowest,  
                    currentIndice:i,
                    currentIndice2:j
                };    
            }   */        
        }

        if(i !== lowest) {
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            return {
                data:[...arr],
                lowest: lowest,
                currentIndice:i+1,
                currentIndice2:i+1
            };
        }
       /* return {
            data:[...arr],
            lowest: lowest,
            currentIndice:i+1,
            currentIndice2:i+1
        }*/
    }
    return {
        data:[...arr],
        lowest: lowest,
        currentIndice:i,
        currentIndice2:i+1
    }
    
}
export default selectionSort;