import React from 'react';
import classes from './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return(
        <div className={classes.Contact}>
            Contact me
            <div className={classes.Links}>
                <div className={classes.FontAwesome}>
                    <FontAwesomeIcon className={classes.linkedin} icon={faLinkedinIn}/>
                </div>
                <div className={classes.FontAwesome}>
                    <FontAwesomeIcon className={classes.facebook} icon={faFacebookF}/>
                </div>
                <div className={classes.FontAwesome}>
                    <FontAwesomeIcon className={classes.github} icon={faGithub}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;