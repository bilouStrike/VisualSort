import React from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';

const SortVisualizer = ({dataArray, currentJ, swap, currentLower, isSorted, isRunning}) =>  {
   
    return (
        <div className='visualizer-container'>
            {
                dataArray.map( (value, index) => (
                    <Bar key={index} 
                        height={value}
                        currentJ={currentJ === index && !isSorted && isRunning ? true : false}
                        currentLower={currentLower === index && !isSorted && isRunning ? true : false}
                        swap={swap.includes(index) ? true : false}
                        sorted={isSorted}
                    />
                ))
            }
        </div>
)}

const mapStateToProps = state => ({
    dataArray: state.settingReducer.dataArray,
    currentJ: state.selectionSortReducer.currentJ,
    currentLower: state.selectionSortReducer.currentLower,
    swap: state.selectionSortReducer.swap,
    isSorted: state.settingReducer.isSorted,
    isRunning: state.settingReducer.isRunning
});


export default connect(mapStateToProps)(SortVisualizer);