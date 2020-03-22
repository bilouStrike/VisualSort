import React from 'react';
import { connect } from 'react-redux';
import { do_start_sort } from '../../store/selectionSort/actions';

import './../../algorithm/selectionSort';

const ControlBar = ({ startSort }) => {
    return (
        <div className='control-bar'>
            <button> New </button>
            <button onClick={startSort}> Start </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startSort: () => dispatch(do_start_sort()),
});

export default connect(null, mapDispatchToProps)(ControlBar);