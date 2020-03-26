import React from 'react';
import { connect } from 'react-redux';

import selectionSort  from  './../../algorithm/selectionSort';
import { set_array, set_array_length, set_running, set_sorted, set_speed } from '../../store/settings/actions';
import { Button, TextField, Slider } from '@material-ui/core';

import './control-bar.styles.css';

const ControlBar = ({sort ,dataArray, arrayLength, setArrayLength, setSpeed, setArray, isRunning, speed}) => {

    function updateLength(event) {
        setArrayLength(event.target.value);
    }

    function updateSpeed(value) {
        setSpeed(value);
    }

    return (
        <div className='control-bar'>
            <div className="control-bar__section">
                <Button disabled={isRunning} onClick={ () => setArray(arrayLength) } variant="contained" color="primary"> Generate New </Button>
                <TextField type="text" value={arrayLength} onChange={ event => updateLength(event)} variant="outlined" size="small"/>
            </div>
            <div className="control-bar__section">
                <h3>  Speed : {speed} </h3>
                <Slider
                    min={1}
                    max={1000}
                    value={speed}
                    onChange={(event, value) => updateSpeed(value)}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
           </div>
           <div className="control-bar__section">
                <Button disabled={isRunning} onClick={() => sort(dataArray, speed)} variant="contained" color="primary"> Start </Button>
           </div>         
        </div>
    )
}

const mapStateToProps = state => ({
    dataArray: state.settingReducer.dataArray,
    arrayLength: state.settingReducer.arrayLength,
    isRunning: state.settingReducer.isRunning,
    isSorted: state.settingReducer.isSorted,
    speed: state.settingReducer.speed
});

const mapDispatchToProps = dispatch => ({
    sort: (dataArray, speed) => {
        dispatch(set_running(true));
        selectionSort(dataArray,speed, dispatch);
    },
    setArray: length => {
        dispatch(set_array(length));
        dispatch(set_sorted(false))
    },
    setArrayLength: length => dispatch(set_array_length(length)),
    setSpeed: speed => dispatch(set_speed(speed)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);