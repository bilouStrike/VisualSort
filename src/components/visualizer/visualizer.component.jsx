import React from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';

const SortVisualizer = ({ dataArray }) =>  {
    console.log(dataArray);
    return (
        <div className='visualizer-container'>
            {
                dataArray.map( (value, index) => (
                    <Bar key={index} height={value} />
                ))
            }
        </div>
)}

const mapStateToProps = (state) => ({
    dataArray: state.dataArray
})
export default connect(mapStateToProps)(SortVisualizer);