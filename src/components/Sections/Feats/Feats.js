import React,{Component} from 'react';

import Aux from '../../../hoc/Auxillary/Auxillary';
import Project from './Project/Project';
import Modal from '../../UI/Modal/Modal';
import Slideshow from './Slideshow/Slideshow';

import classes from './Feats.css';
import Fade from 'react-reveal/Fade';

import BurgerApp from '../../../assets/Burgerbuilder.png';
import BurgerBuilder from '../../../assets/Burgerbuilder.gif';

import Dashboard from '../../../assets/Vue dash board.png';
import Crud from '../../../assets/Crud.png';
import FoodLogs from '../../../assets/Add food logs.png';

import SaveFood from '../../../assets/OrderPickUp-phone.png';
import Analytics from '../../../assets/analytics-phone.png';

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

        let modal = null;

        if(this.state.show){
            modal = <Modal show={this.state.show} clicked={this.modalCloseHandler}>
                        <Slideshow close={this.modalCloseHandler} 
                            description={this.state.description}
                            slider={this.state.carousel}
                    />
                    </Modal>
        }

        return(
            <Aux>
                {modal}
                <Fade bottom>
                    <div className={classes.Feats} id="Projects">
                        <h2>My Projects</h2>

                        <div className={classes.GridList}>
                            <Project img={BurgerApp} 
                                description="Burger App"
                                carousel={[BurgerBuilder]}
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
                                carousel={[SaveFood,Analytics]}
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
                </Fade>
            </Aux>
        );
    }
}

export default Feats;