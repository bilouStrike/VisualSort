import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Bar from './../bar/bar.component';
import './visualizer.css';
import { do_select_sort } from '../../store/actions';

const SortVisualizer = ({ dataArray , dispatch, isStart }) =>  {

    const { data, currentIndice, lowest, currentIndice2 } = dataArray; 
    useEffect(() => {
        if (isStart) { 
           const timer = setTimeout(
                () => dispatch(do_select_sort()),
               500
            );
            return () => clearTimeout(timer);
        }
    });

    return (
        <div className='visualizer-container'>
            {
                data.map( (value, index) => (
                    <Bar key={index} 
                        height={value}
                        currentIndice={currentIndice == index ? true : false}
                        lowest={lowest == index ? true : false}
                        currentIndice2={currentIndice2 == index ? true : false}
                    />
                ))
            }
        </div>
)}

const mapStateToProps = (state) => ({
    dataArray: state.dataArray,
    isStart: state.start,
    currentIndice:state.currentIndice,
    currentIndice2:state.currentIndice
});

const mapDispatchToProps = dispatch => ({
    dispatch
});
export default connect(mapStateToProps,mapDispatchToProps)(SortVisualizer);