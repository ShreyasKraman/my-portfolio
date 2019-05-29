import React,{Component} from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Project from './Project/Project';
import Modal from '../../UI/Modal/Modal';
import Slideshow from './Slideshow/Slideshow';

import classes from './Feats.css';

import BurgerApp from '../../../assets/Burgerbuilder.png';

import Dashboard from '../../../assets/Vue dash board.png';
import Crud from '../../../assets/Crud.png';
import FoodLogs from '../../../assets/Add food logs.png';

import SaveFood from '../../../assets/Order pickup.png';
import Signin from '../../../assets/Save our food google sign in.png';
import Analytics from '../../../assets/Analytics.png';

import TSK from '../../../assets/TSK.png';
import Appointment from '../../../assets/TSK 2.png';
import Email from '../../../assets/TSK 3.png';

class Feats extends Component {

    state = {
        show:false,
        carousel:[],
        description:null
    };

    modalOpenHandler = (imgs,desc) => {
        this.setState({ show:true,
                        carousel:imgs,
                        description:desc
                     });
    }

    modalCloseHandler = () => {
        this.setState({show:false,
                        carousel:[],
                        description:null});
    }

    render(){

        return(
            <Aux>
                <h3>My Projects</h3>

                <Modal show={this.state.show} clicked={this.modalCloseHandler}>
                        <Slideshow close={this.modalCloseHandler} 
                            description={this.state.description}
                            slider={this.state.carousel}
                        />
                </Modal>

                <div className={classes.Feats}>
                    <div className={classes.GridList}>
                        <Project img={BurgerApp} 
                            description="Burger App"
                            carousel={[BurgerApp]}
                            more={this.modalOpenHandler}
                            slider={this.carouselHandler}/>
                        <Project 
                            img={Dashboard} 
                            description="Vue Dashboard"
                            carousel={[Dashboard,Crud,FoodLogs]}
                            more={this.modalOpenHandler}
                            slider={this.carouselHandler}/>
                        <Project 
                            img={SaveFood} 
                            description="Ios App"
                            carousel={[SaveFood,Signin,Analytics]}
                            more={this.modalOpenHandler}
                            slider={this.carouselHandler}/>
                        <Project 
                            img={TSK} 
                            description="TSK"
                            carousel={[TSK,Appointment,Email]}
                            more={this.modalOpenHandler}
                            slider={this.carouselHandler}/>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Feats;