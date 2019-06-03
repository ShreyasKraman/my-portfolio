import React,{Component} from 'react';

import NavigationItems from '../NavigatioinItems/NavigationItems'; 

import classes from './Toolbar.css';

import Logo from './Logo/Logo';
import Menu from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';

class Toolbar extends Component{
    render(){

        const resume = [classes.DesktopOnly, classes.Resume];

        return(
            <Fade top>
                <header className={classes.Toolbar}>
                    <div className={classes.MobileOnly} onClick={this.props.open}><Menu/></div>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                    <div className={resume.join(' ')}>
                        <a  target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1NWPdeDhDoJLNV-fd-3G-IJNDgppcMVCD/view?usp=sharing">
                        Resume</a>
                    </div>
                </header>
            </Fade>
        );
    }
}

export default Toolbar;


