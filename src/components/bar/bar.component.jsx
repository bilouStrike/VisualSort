import React from 'react'
import './bar.style.css';

const Bar = ({ height }) => {
    return (
        <div className='bar' style={{ height: `${height*20+10}px`}}></div>
    );
}
export default Bar;