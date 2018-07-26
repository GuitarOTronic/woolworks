import React, { Component } from 'react';
import hat from '../assets/BrimmedHatzapp.jpg'
import BeardedTeapot from '../assets/BeardedTeapot.jpg'
import blueCape1 from '../assets/homePhotos/blueCape1.jpg'
import coat1 from '../assets/homePhotos/coat1.jpg'
import '../css/carousel.css'
import {Carousel} from 'react-bootstrap'

class CarouselComponent extends Component {

  render(){

    return (
      <div className='picContainer'>
        {/* <img src={hat} alt='hat'/> */}
        <Carousel className={'CarouselContainer'} indicators={false} style={{width:'60vw', backgroundColor:'black', margin:'0 auto'}}>
          {/* <Carousel.Item>
            <img  alt="hat" src={hat} style={{margin:'0 auto'}}/>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Item> */}
          <Carousel.Item>
            <img alt="coat" src={coat1} style={{margin:'0 auto'}}/>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Item>
          <Carousel.Item>
            <img alt="Bearded Teapot" src={BeardedTeapot} style={{margin:'0 auto'}}/>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Item>
          <Carousel.Item>
            <img alt="blue Cape" src={blueCape1} style={{margin:'0 auto'}}/>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Item>

        </Carousel>

      </div>
    );
  }

}

export default CarouselComponent;
