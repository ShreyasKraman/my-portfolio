import React,{Component} from 'react';

import NavigationItems from '../NavigatioinItems/NavigationItems'; 

import classes from './Toolbar.css';

import Menu from '@material-ui/icons/Menu';

class Toolbar extends Component{
    render(){
        return(
            <header className={classes.Toolbar}>
                <div className={classes.MobileOnly} onClick={this.props.open}><Menu/></div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                </nav>
                <div className={classes.Resume}>
                    <a  target="_blank"
                        rel="noopener"
                        href="https://drive.google.com/file/d/1VOdzn9Zg9fT0eJBy3HwsqXiZS5dmzzar/view?usp=sharing">
                    Resume</a>
                </div>
            </header>
        );
    }
}

export default Toolbar;


