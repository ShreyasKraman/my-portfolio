import React from 'react';

import classes from './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return(
        <div className={classes.Contact} id="Contact">
            <h2>Contact</h2>

            <h4>Known enough about me? Now its your turn. Say Hello!</h4>

            <div className={classes.mail}> 
                <a href="mailto:shreyas.kalyanaraman@gmail.com">Get in touch</a>
            </div>

            <div className={classes.Links}>
                <div className={classes.FontAwesome}>
                    <a href="https://www.linkedin.com/in/ShreyasKalyanaraman" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"3x"} icon={faLinkedin}/></a>
                </div>
                <div className={classes.FontAwesome}>
                    <a href="mailto:shreyas.kalyanaraman@gmail.com"><FontAwesomeIcon size={"3x"} icon={faEnvelope}/></a>
                </div>
                <div className={classes.FontAwesome}>
                    <a href="https://www.github.com/ShreyasKRaman" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"3x"} icon={faGithub}/></a>
                </div>
                <div className={classes.FontAwesome}>
                    <a href="https://www.instagram.com/shreyaskalyanaraman/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size={"3x"} icon={faInstagram}/></a>
                </div>
            </div>

            <p>Designed & Built by Shreyas Kalyanaraman</p>
        </div>
    );
}

export default Contact;