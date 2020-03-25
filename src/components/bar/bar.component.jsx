import React from 'react'
import './bar.style.css';

const Bar = ({ height, currentJ, currentLower, swap, sorted }) => {

    const style = {
        height: `${height*20}px`,
        backgroundColor: swap ? 'blue' : currentJ ? 'red' : currentLower ? 'yellow' : sorted ? 'rgb(82, 188, 105)' : 'rgb(173, 216, 230)'
    }
    const active_classess = 'bar'; 
    return (
        <div className={active_classess} style={style}></div>
    );
}
export default Bar;