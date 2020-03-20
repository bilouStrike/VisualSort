import React from 'react'
import './bar.style.css';

const Bar = ({ height, currentJ, currentLower }) => {
    //console.log(currentIndice);
    const style = {
        height: `${height*20+10}px`,
        backgroundColor:  currentJ ? 'red' : currentLower ? 'yellow' : 'aqua'
    }
    const active_classess = 'bar'; 
    return (
        <div className={active_classess} style={style}></div>
    );
}
export default Bar;