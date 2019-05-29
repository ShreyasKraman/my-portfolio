import React, {Component} from 'react';

import {Carousel} from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

class Slideshow extends Component {

    state={
      index: 0,
      direction: null,
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
    }

    render(){
        const {index, direction} = this.state;
        
        return(
            <div>
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    >
                    {   
                        this.props.slider.map((img,index)=> {
                            return(
                                <Carousel.Item> 
                                <img src={img} alt={this.props.description} key={index}></img>
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