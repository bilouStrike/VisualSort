import React from 'react';
import { connect } from 'react-redux';

import selectionSort  from  './../../algorithm/selectionSort';
import { set_array, set_array_length, set_running, set_sorted } from '../../store/settings/actions';
import { Button, TextField } from '@material-ui/core';
import './control-bar.styles.css';

const ControlBar = ({ sort ,dataArray, arrayLength, setArrayLength, setArray, isRunning }) => {

    function updateLength(event) {
        setArrayLength(event.target.value);
    }

    return (
        <div className='control-bar'>
            <Button disabled={isRunning} onClick={() => sort(dataArray)} variant="contained" color="primary"> Start </Button>
            <Button disabled={isRunning} onClick={ () => setArray(arrayLength) } variant="contained" color="primary"> Generate New </Button>
            <TextField type="text" value={arrayLength} onChange={ event => updateLength(event)} variant="outlined" size="small"/>
        </div>
    )
}

const mapStateToProps = state => ({
    dataArray: state.settingReducer.dataArray,
    arrayLength: state.settingReducer.arrayLength,
    isRunning: state.settingReducer.isRunning,
    isSorted: state.settingReducer.isSorted
});

const mapDispatchToProps = dispatch => ({
    sort: dataArray => {
        dispatch(set_running(true));
        selectionSort(dataArray, dispatch);
    },
    setArray: length => {
        dispatch(set_array(length));
        dispatch(set_sorted(false))
    },
    setArrayLength: length => dispatch(set_array_length(length))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);