import React from 'react';

import Skillbar from './Skillbar/Skillbar';

import classes from './Datacenter.css';

const Datacenter = () => {
    return(
        <div className={classes.Datacenter}>
            <h3>My Skills</h3>
            <div className={classes.Skills}>
                <ul>
                    <h6>Front End frameworks</h6>
                    <li><Skillbar skill="React" /></li>
                    <li><Skillbar skill="Redux" /></li>
                    <li><Skillbar skill="React Native" /></li>
                    <li><Skillbar skill="Vue" /></li>
                    <li><Skillbar skill="Vuex" /></li>
                </ul>
                <ul>
                    <h6>Back End frameworks</h6>
                    <li><Skillbar skill="Java"/></li>
                    <li><Skillbar skill="Spring Boot"/></li>
                    <li><Skillbar skill="Hibernate"/></li>
                    <li><Skillbar skill="Node.js"/></li>
                    <li><Skillbar skill="Express.js"/></li>
                </ul>
                <ul>
                    <h6>Mobile and Database</h6>
                    <li><Skillbar skill="Swift 4.0"/></li>
                    <li><Skillbar skill="Android"/></li>
                    <li><Skillbar skill="My SQL"/></li>
                    <li><Skillbar skill="Mongo Db"/></li>
                    <li><Skillbar skill="Firebase"/></li>
                    <li><Skillbar skill="Redis"/></li>
                </ul>
                <ul>
                    <h6>Cloud and Virtualization</h6>
                    <li><Skillbar skill="AWS"/></li>
                    <li><Skillbar skill="VmWare"/></li>
                    <li><Skillbar skill="Docker"/></li>
                </ul>
                <ul>
                    <h6>Versioning and Testing</h6>
                    <li><Skillbar skill="Git"/></li>
                    <li><Skillbar skill="Gitlab"/></li>
                    <li><Skillbar skill="JUnit"/></li>
                    <li><Skillbar skill="Mocha"/></li>
                    <li><Skillbar skill="Chai"/></li>
                </ul>
            </div>
        </div>
    );
}

export default Datacenter;