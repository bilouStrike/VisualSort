import React from 'react'
import './bar.style.css';

const Bar = ({ height, currentJ, currentLower, swap, sorted }) => {

    const style = {
        height: `${height*12+10}px`,
        backgroundColor: swap ? 'blue' : currentJ ? 'red' : currentLower ? 'yellow' : sorted ? 'gray' : 'aqua'
    }
    const active_classess = 'bar'; 
    return (
        <div className={active_classess} style={style}></div>
    );
}
export default Bar;