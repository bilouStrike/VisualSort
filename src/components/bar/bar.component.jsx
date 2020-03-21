import React from 'react'
import './bar.style.css';

const Bar = ({ height, currentJ, currentLower, swap }) => {
    console.log(swap);
    const style = {
        height: `${height*12+10}px`,
        backgroundColor: swap ? 'blue' : currentJ ? 'red' : currentLower ? 'yellow' : 'aqua'
    }
    const active_classess = 'bar'; 
    return (
        <div className={active_classess} style={style}></div>
    );
}
export default Bar;