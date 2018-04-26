import React, { Component } from 'react';
import hat from '../assets/BrimmedHatzapp.jpg'
import '../css/carousel.css'
class Carousel extends Component {


  render(){
  console.log(hat);

    return (
      <div className='picContainer'>
        <img src={hat} alt='hat'/>

      </div>
    );
  }

}

export default Carousel;
