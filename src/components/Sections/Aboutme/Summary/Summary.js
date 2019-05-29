import React from 'react';

import Aux from '../../../../hoc/Auxillary/Auxillary';

import classes from './Summary.css';

const Summary = () => {
    return(
        <Aux>
            <div className={classes.Summary}>
                {/* <div className={classes.Parent}>
                    I am shreyas kalyanaraman.
                    <div className={classes.Border}></div>    
                </div> */}
                <ul>
                    <li>Hello! My name is Shreyas Kalyanaraman</li>
                    <li>I design, build &amp deploy Web Applications</li>
                    <li>Basically, I am a Full Stack Engineer with knowledge of CI/CD pipline</li>
                </ul>
            </div>
        </Aux>
    );
}

export default Summary;