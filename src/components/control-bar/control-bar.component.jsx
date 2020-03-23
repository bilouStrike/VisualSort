import React from 'react';
import { connect } from 'react-redux';
import { do_start_sort } from '../../store/selectionSort/actions';

import selectionSort  from  './../../algorithm/selectionSort';

const ControlBar = ({ startSort, sort , dataArray }) => {
    return (
        <div className='control-bar'>
            <button> New </button>
            <button onClick={() => sort(dataArray)}> Start </button>
        </div>
    )
}

const mapStateToProps = state => ({
    dataArray: state.settingReducer.dataArray
});

const mapDispatchToProps = dispatch => ({
    sort: dataArray => {
        selectionSort( dataArray, dispatch );
    },
    startSort: () => dispatch(do_start_sort()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);