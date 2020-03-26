import React from 'react';
import { Button } from '@material-ui/core';

import './top-menu.styles.css';
const TopMenu = () => {
    return (
        <div className='topMenu'>
            <div className='topMen__logo'><span> Visuale Sort </span></div>
            <div className='topMen__items'>
                <Button variant="contained" color="primary" onClick=''> Selection Sort </Button>
                <Button variant="contained" color="primary" onClick=''> Quick Sort </Button>
                <Button variant="contained" color="primary" onClick=''> Insertion Sort </Button>
            </div>
        </div>
    );
}

export default TopMenu;