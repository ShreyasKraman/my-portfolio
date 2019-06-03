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

import Rest from '../../../assets/restapi.png'

import Portfolio from '../../../assets/portfolio.png';

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
                                title="Burger Builder App" 
                                description="Built a application with responsive design to custom build the burger before purchase."
                                tech="React, Redux, Firebase"
                                link="https://github.com/ShreyasKraman/Udemy-Burger-Builder"
                                carousel={[BurgerBuilder]}
                                more={this.modalOpenHandler}
                                slider={this.carouselHandler}/>
                            <Project 
                                img={Dashboard}
                                title="Food Logging Dashboard" 
                                description="Built dashboard for clients (mainly restaurents) to input & track their daily food wastage."
                                tech="Vue, Vuex, Vue-Material ui, Node.js, Express.js, MS SQL"
                                link="https://github.com/ShreyasKraman/Vue-Dashboard"
                                carousel={[Dashboard,Crud,FoodLogs]}
                                more={this.modalOpenHandler}
                                slider={this.carouselHandler}/>
                            <Project 
                                img={SaveFood} 
                                title="Save the food"
                                description="Built mobile app to encourage food donation and create awareness amongst general public."
                                tech="Swift4, Firebase, Google API Signin, AVFoundation"
                                link="https://github.com/ShreyasKraman/SaveOurFood"
                                carousel={[SaveFood,Analytics]}
                                more={this.modalOpenHandler}
                                slider={this.carouselHandler}/>
                            <Project 
                                img={Rest}
                                title="Expense Tracker API"
                                description="Designed and build an api endpoint to keep track of expenses and store expense bills as well."
                                tech="Spring Boot, Hibernate, Travis, AWS EC2, AWS ELB, AWS S3, AWS Cloudformation, AWS IAM"
                                link="https://github.com/ShreyasKraman/aws_cicd_api"
                                more={this.modalOpenHandler}
                                slider={this.carouselHandler}/>
                            <Project 
                                img={TSK}
                                title="Disease Follow-up Portal" 
                                description="Designed & developed app to ease communication between tuberculosis affected patients and doctors."
                                tech="Java, Spring, Hibernate, Bootstrap, MY SQL"
                                link="https://github.com/ShreyasKraman/TSK"
                                carousel={[TSK,Appointment,Email]}
                                more={this.modalOpenHandler}
                                slider={this.carouselHandler}/>
                            <Project 
                                img={Portfolio}
                                title="Portfolio website" 
                                description="Designed & developed to express about myself in geeky way!"
                                tech="React, React-bootstrap, React-MaterialUI"
                                link="https://github.com/ShreyasKraman/my-portfolio"
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