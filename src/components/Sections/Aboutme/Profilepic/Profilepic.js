import React from 'react';

import Mypic from '../../../../assets/cartoonish.jpg';

import Image from 'react-bootstrap/Image';
import classes from './Profilepic.css';

const Profilepic = () => {
    return(
        <div className={classes.Profilepic}>
            <Image src={Mypic} alt="Shreyas Kalyanaraman" thumbnail></Image>
        </div>
    );
}

export default Profilepic;