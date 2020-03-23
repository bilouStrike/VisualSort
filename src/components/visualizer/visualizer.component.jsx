import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';

const SortVisualizer = ({ dataArray, currentJ, swap, currentLower }) =>  {
   
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
    dataArray: state.settingReducer.dataArray,
    currentJ:state.selectionSortReducer.currentJ,
    currentLower:state.selectionSortReducer.currentLower,
    swap:state.selectionSortReducer.swap,
});


export default connect(mapStateToProps)(SortVisualizer);