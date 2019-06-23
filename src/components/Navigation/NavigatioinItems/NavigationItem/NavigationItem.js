import React from 'react';

import classes from './NavigationItem.css';

import { Link } from "react-scroll";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigationItem = (props) => {
    return (
    <li className={classes.NavigationItem}>
        {/* <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}
        </a> */}
        <FontAwesomeIcon size={"sm"} className={classes.Icons} icon={props.icon}/>
        <Link to={props.link}  
              className={props.active ? classes.active : null}
              activeClass={props.active ? "active" : null}
              onClick={props.close}
              smooth={true}
              offset={-70}
              duration={1000}>
                {props.children}
        </Link> 
    </li>
    );
};

export default navigationItem;