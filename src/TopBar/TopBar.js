import React from 'react';
import img from '../assets/img/amazon-logo.png';
import classes from './TopBar.module.css'

const TopBar = () => {
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src={img} alt='Amazon Logo'></img>
            </nav>
        </header>
    );
}

export default TopBar