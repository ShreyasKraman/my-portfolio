import React from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigatioinItems/NavigationItems';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import classes from './Sidedrawer.css';


const Sidedrawer = (props) => {

    let attachedClasses = [classes.SideDrawer];
    let action = props.open ? classes.Open : classes.Close;
    attachedClasses.push(action);
    let navClasses = [classes.Nav];
    if(props.open){
        navClasses = null;
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                    {/* <FontAwesomeIcon size={"2x"} className={classes.Exit} onClick={props.close} icon={faTimes}/> */}
                    <h3>My Portfolio</h3>
                    <span></span>
                    <nav className={navClasses}>
                        <NavigationItems close={props.close}/>
                    </nav>
            </div>
        </Aux>
    );
}

export default Sidedrawer;