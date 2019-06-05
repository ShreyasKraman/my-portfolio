import React from 'react';

import Mypic from '../../../../assets/cartoonish.jpg';

import Image from 'react-bootstrap/Image';
import classes from './Profilepic.css';

const Profilepic = () => {
    return(
        <div className={classes.Profilepic}>
            <a href="https://github.com/ShreyasKRaman" target="_blank" rel="noopener noreferrer"><Image src={Mypic} alt="Shreyas Kalyanaraman" thumbnail></Image></a>
        </div>
    );
}

export default Profilepic;