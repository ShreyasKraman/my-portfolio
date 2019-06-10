import React from 'react';

import Aux from '../../../../hoc/Auxillary/Auxillary';
import Icon from './Icon/Icon';


import classes from './Summary.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faVuejs} from '@fortawesome/free-brands-svg-icons';
import {faJava} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faAws} from '@fortawesome/free-brands-svg-icons';
import {faDocker} from '@fortawesome/free-brands-svg-icons';

import {faHiking} from '@fortawesome/free-solid-svg-icons';
import {faBicycle} from '@fortawesome/free-solid-svg-icons';
import {faMapMarked} from '@fortawesome/free-solid-svg-icons';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';

import Spring from '../../../../assets/spring.svg';
import Hibernate from '../../../../assets/hibernate.png';
import Vmware from '../../../../assets/vmware.png';
import Mocha from '../../../../assets/mocha.png';
import Express from '../../../../assets/expressjs.png';
import Chai from '../../../../assets/chai.png';
import Junit from '../../../../assets/junit.png';

const Summary = () => {
    return(
        <Aux>
            <div className={classes.Summary}>
                <p>Hey I am Shreyas, a Full stack software engineer who 
                    enjoys building unique apps to solve real world problems. 
                    I like to keep apps secure, error free, simple and clean. 
                </p>
                <p>Currently, I am pursuing masters from &nbsp;  
                    <a href="http://www.coe.neu.edu/" target="_blank" rel="noopener noreferrer">
                        Northeastern University
                    </a>
                , Boston. I interned as Software Developer for 4 months at &nbsp;
                    <a href="https://phoodsolutions.com/" target="_blank" rel="noopener noreferrer" >
                        Phood LLC
                    </a>, and have 2 years of professional work experience in &nbsp;
                    <a href="https://www.lntinfotech.com/" target="_blank" rel="noopener noreferrer">
                        L&T Infotech
                    </a> as software developer.
                </p>
                <h5>My areas of expertise are</h5>
                
                <ul>
                     <li>
                         <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.React} icon={faReact}/>React.js
                         </div>
                     </li>
                     <li>
                        <div className={classes.IconGrid}> 
                            <FontAwesomeIcon className={classes.Vue}icon={faVuejs}/> Vue.js
                        </div>     
                    </li>
                     <li>
                        <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.Java}icon={faJava}/> Java
                        </div>
                    </li>
                     <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Spring} desc="Spring"/> Spring MVC
                        </div>
                         </li> 
                     <li>
                     <div className={classes.IconGrid}>
                         <Icon img={Spring} desc="Spring"/> Spring Boot
                         </div>
                         </li> 
                     <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Hibernate} desc="Hibernate"/> Hibernate
                        </div>
                    </li> 
                     <li>
                        <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.Git} icon={faGithub}/> Git
                        </div>
                    </li>
                </ul>
                <h5>I also have hands-on knowledge in</h5>
                <ul>
                    <li>
                        <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.Node} icon={faNodeJs}/> Node.js
                        </div>
                        </li> 
                    <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Express} desc="Expressjs"/> Express.js
                        </div>
                    </li>
                    <li>
                        <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.Aws} icon={faAws}/> AWS
                        </div>
                    </li>
                    <li>
                        <div className={classes.IconGrid}>
                            <FontAwesomeIcon className={classes.Docker} icon={faDocker}/> Docker
                        </div>
                    </li> 
                    <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Vmware} desc="Vmware"/> Vmware
                        </div>
                    </li>
                    <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Junit} desc="Junit"/> JUnit
                        </div>
                    </li>
                    <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Mocha} desc="Mocha"/> Mocha
                        </div>
                    </li> 
                    <li>
                        <div className={classes.IconGrid}>
                            <Icon img={Chai} desc="Chai"/> Chai
                        </div>
                    </li> 
                </ul>

                <p className={classes.Hobbies}>
                    I love <FontAwesomeIcon className={classes.HobbyIcon} icon={faHiking}/> hiking, 
                    &nbsp;<FontAwesomeIcon className={classes.HobbyIcon} icon={faBicycle}/> biking, 
                    &nbsp;<FontAwesomeIcon className={classes.HobbyIcon} icon={faMapMarked}/> exploring new places and
                    &nbsp;<FontAwesomeIcon className={classes.HobbyIcon} icon={faGamepad}/> playing games (FPS, TPS and Fifa mostly)</p>
            </div>
        </Aux>
    );
}

export default Summary;