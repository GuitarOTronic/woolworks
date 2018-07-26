import React, { Component } from 'react';
import CarouselComponent from './carouselComponent.js'
import '../css/home.css'
class Home extends Component {

  render() {
    return (
      <div className='homeContainer'>
        {/* <h2>ABOUT: </h2> */}


        <div style={{paddingTop:'3rem'}}>
          <p>I’m intrigued by the alchemy of felt making.</p>
          <p>
            For the PT Wearable Art show (Port Townsend), I used the extremes of wool’s capability. I’ve tried my hand with the delicate application of nuno felting to create a wedding dress. The Animals in the Landscape Coat was inspired by a Franz Marc painting. My ‘painting’ wrapped around the long coat and it’s circular draped tail added drama to its movement. The Horned Mask is a densely felted sculpture.  The possibilities to create with wool are endless.
          </p>
        </div>
        <CarouselComponent />
        {/* <hr></hr> */}
        <p>Nuno Felting is achieved through the stacking & layering of merino wool fibers onto hand dyed silk, carefully varying their lengths & alignments in a fashion that allows for controlled shrinkage. The resulting felt maintains just the right amount of movement & drape for its function as good design & clothing. </p>
      </div>
    );
  }

}

export default Home;
