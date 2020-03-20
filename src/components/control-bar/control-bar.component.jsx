import React from 'react';
import { connect } from 'react-redux';
import { do_start_sort } from '../../store/actions';
import './../../algorithm/selectionSort';

const ControlBar = ({ sortMethod, startSort, dispatch }) => {
    return (
        <div className='control-bar'>
            <button> New </button>
            <button onClick={startSort}> Start </button>
        </div>
    )
}
const mapStateToProps = state => ({
    sortMethod:state.sortMethod
})

const mapDispatchToProps = dispatch => ({
    startSort: () => dispatch(do_start_sort()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);