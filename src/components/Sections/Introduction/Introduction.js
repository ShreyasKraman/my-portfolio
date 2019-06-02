import React, {Component} from 'react';

import classes from './Introduction.css';

import Fade from 'react-reveal/Fade';

class Introduction extends Component{ 

    render(){
        
        return (
            <div className={classes.Introduction}>
                <Fade top cascade>
                    <div className={classes.Pitch}>
                        <h5>Hi, my name is</h5> 
                        <h2>Shreyas Kalyanaraman.</h2>
                        <h4>My Mission: Build apps to solve problems</h4>
                        <div className={classes.Paragraph}>
                            <p>I am a Full Stack Software Engineer, looking for opportunities all over the USA 
                                to contribute, team up and learn from experts in the software universe. 
                            </p>
                        </div>
                        <div className={classes.mail}> 
                            <a href="mailto:shreyas.kalyanaraman@gmail.com">Get in touch</a>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Introduction;