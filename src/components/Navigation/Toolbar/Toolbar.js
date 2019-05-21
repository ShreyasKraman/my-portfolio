import React,{Component} from 'react';

import NavigationItems from '../NavigatioinItems/NavigationItems'; 

import './Toolbar.css';

import Menu from '@material-ui/icons/Menu';

class Toolbar extends Component{
    render(){
        return(
            <header className="Toolbar">
                <div className="MobileOnly" onClick={this.props.open}><Menu/></div>
                <nav className="DesktopOnly">
                    <NavigationItems/>
                </nav>
            </header>
        );
    }
}

export default Toolbar;


