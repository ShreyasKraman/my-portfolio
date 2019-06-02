import React, {Component} from 'react';

import Introduction from '../../components/Sections/Introduction/Introduction';
import Aboutme from '../../components/Sections/Aboutme/Aboutme';
import Feats from '../../components/Sections/Feats/Feats';
import Timeline from '../../components/Sections/Timeline/Events';
import Contact from '../../components/Sections/Contact/Contact';

import classes from './Portfolio.css';

class Portfolio extends Component {

    render(){
        return(
            <div className={classes.Portfolio}>
                <Introduction/>
                <Aboutme/>
                <Timeline/>
                <Feats/>
                <Contact/>
            </div>
        );
    }
}

export default Portfolio;