import React, {Component} from 'react';

import Aux from '../Auxillary/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    
    state={
        showSideDrawer:false,
    }

    openSideDrawerHandler = () =>{
        this.setState({showSideDrawer:true});
    }

    closeSideDrawerHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }
    
    render(){

        // const sidedrawer = this.state.showSideDrawer ? <Sidedrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/> : null;

        return(
            <Aux>
                <Toolbar open={this.openSideDrawerHandler}/>
                {/* {sidedrawer} */}
                <Sidedrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
