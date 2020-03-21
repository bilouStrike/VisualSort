import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';

import selectionSort  from  './../../algorithm/selectionSort';

const SortVisualizer = ({ dataArray ,currentI, currentJ, currentLower, dispatch, isStart, sort }) =>  {

    //const { data, currentIndice, lowest, currentIndice2 } = dataArray; 
    useEffect(() => {
        if ( isStart ) { 
            return () => sort(dataArray, dispatch, isStart);
            /*
            const timer = setTimeout(
                () => sort(dataArray, dispatch),
               500
            );
            return () => clearTimeout(timer);*/
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
                    />
                ))
            }
        </div>
)}

const mapStateToProps = (state) => ({
    dataArray: state.dataArray,
    isStart: state.start,
    currentI:state.currentI,
    currentJ:state.currentJ,
    currentLower:state.currentLower
});

const mapDispatchToProps = dispatch => ({
    sort: dataArray => {
        selectionSort( dataArray, dispatch );
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(SortVisualizer);