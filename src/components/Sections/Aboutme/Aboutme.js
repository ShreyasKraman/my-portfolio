import React from 'react';

import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';

import classes from './Aboutme.css';
import Slide from 'react-reveal/Slide';

const Aboutme = () => {
    return(
        <Slide left>
            <div id="AboutMe" className={classes.Aboutme}>
                <h2>About Me</h2>
                <div className={classes.container}>
                    <Summary/>
                    <ProfilePic/>
                </div>
            </div>
        </Slide>
    );
}

export default Aboutme;