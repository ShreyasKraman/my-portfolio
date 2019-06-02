import React from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigatioinItems/NavigationItems';

import classes from './Sidedrawer.css';


const Sidedrawer = (props) => {

    let attachedClasses = [classes.Sidedrawer, classes.Close ]
    
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
                <div className={classes.Resume}>
                    <a  target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1VOdzn9Zg9fT0eJBy3HwsqXiZS5dmzzar/view?usp=sharing">
                    Resume</a>
                </div>
            </div>
        </Aux>
    );
}

export default Sidedrawer;