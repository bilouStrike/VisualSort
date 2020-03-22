import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';

import selectionSort  from  './../../algorithm/selectionSort';

const SortVisualizer = ({ dataArray ,currentI, currentJ, swap, currentLower, dispatch, isStart, sort }) =>  {
    
    useEffect(() => {
        if ( isStart ) { 
            return () => sort(dataArray, dispatch);
         }
    });
    
    return (
        <div className='visualizer-container'>
            {
                dataArray.map( (value, index) => (
                    <Bar key={index} 
                        height={value}
                        currentJ={currentJ == index ? true : false}
                        currentLower={currentLower == index ? true : false}
                        swap={ swap.includes(index) ? true : false  }
                    />
                ))
            }
        </div>
)}

const mapStateToProps = state => ({
    dataArray: state.selectionSortReducer.dataArray,
    isStart: state.selectionSortReducer.start,
    currentI:state.selectionSortReducer.currentI,
    currentJ:state.selectionSortReducer.currentJ,
    currentLower:state.selectionSortReducer.currentLower,
    swap:state.selectionSortReducer.swap,
});

const mapDispatchToProps = dispatch => ({
    sort: dataArray => {
        selectionSort( dataArray, dispatch );
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(SortVisualizer);