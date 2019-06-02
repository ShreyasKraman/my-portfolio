import React from 'react';

import classes from './NavigationItem.css';

import { Link, animateScroll as scroll } from "react-scroll";

const navigationItem = (props) => {
    return (
    <li className={classes.NavigationItem}>
        {/* <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}
        </a> */}
        <Link to={props.link}  
              className={props.active ? classes.active : null}
              activeClass={props.active ? "active" : null}
              smooth={true}
              offset={-70}
              duration={1000}>
                {props.children}
        </Link> 
    </li>
    );
};

export default navigationItem;