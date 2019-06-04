import React, {Component} from 'react';

import {Carousel} from 'react-bootstrap';

import classes from './Slideshow.css';

class Slideshow extends Component {

    render(){
        return(
            <div>
                <Carousel
                    interval={1000}
                    >
                    {   
                        this.props.slider.map((img,index)=> {
                            return(
                                <Carousel.Item key={index}> 
                                    <img className={classes.image} src={img} alt={this.props.description}></img>
                                </Carousel.Item>
                                );
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default Slideshow;