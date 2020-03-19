import React from 'react'
import './bar.style.css';

const Bar = ({ height, currentIndice,currentIndice2, lowest }) => {
    console.log(currentIndice);
    const style = {
        height: `${height*20+10}px`,
        backgroundColor:  currentIndice2 ? 'red' : lowest ? 'yellow' : 'aqua'
        //backgroundColor: lowest ? 'yellow' : 'aqua',
    }
    const active_classess = lowest ? 'bar isCurrent' : 'bar'; 
    return (
        <div className={active_classess} style={style}></div>
    );
}
export default Bar;