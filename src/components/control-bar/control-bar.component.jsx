import React from 'react';
import {connect} from 'react-redux';
import {do_select_sort} from '../../store/actions';

const ControlBar = ({ sortMethod, startSort }) => {
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
    startSort: () => dispatch(do_select_sort())
})
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);