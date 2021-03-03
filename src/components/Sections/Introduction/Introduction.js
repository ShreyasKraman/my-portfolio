import React, {Component} from 'react';

import classes from './Introduction.css';

import Fade from 'react-reveal/Fade';

class Introduction extends Component{ 

    render(){
        
        return (
            <div className={classes.Introduction}>
                {/* <Fade top cascade> */}
                    <div className={classes.Pitch}>
                        <h5>Hi, my name is</h5> 
                        <h2>Shreyas Kalyanaraman.</h2>
                        <h3>I build software apps for the Net.</h3>
                        <div className={classes.Paragraph}>
                            <p>I am a Full Stack Software Engineer, 
                                currently contributing, teaming up and learning from experts in the software universe. 
                            </p>

                        </div>
                        <div className={classes.Grid}>
                            <div className={classes.mail}> 
                                <a href="mailto:shreyas.kalyanaraman@gmail.com">Get in touch</a>
                            </div>
                            <div className={classes.Resume}>
                                <a  target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/file/d/1NWPdeDhDoJLNV-fd-3G-IJNDgppcMVCD/view?usp=sharing">
                                Resume</a>
                            </div>
                        </div>
                    </div>
                {/* </Fade> */}
            </div>
        );
    }
}

export default Introduction;