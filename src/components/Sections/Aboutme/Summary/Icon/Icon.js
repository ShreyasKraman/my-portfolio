import React from 'react'

import classes from './Icon.css';

const Icon = (props) => (
    <img src={props.img} alt={props.desc} className={classes.Icon}/>
)

export default Icon;