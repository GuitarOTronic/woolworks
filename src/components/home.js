import React, { Component } from 'react';
import CarouselComponent from './carouselComponent.js'
import '../css/home.css'
class Home extends Component {

  render() {
    return (
      <div className='homeContainer'>
        {/* <h2>ABOUT: </h2> */}

        {/* <CarouselComponent /> */}
        <div className='homeCopy'>
          {/* <p>
          I’m intrigued by the alchemy of felt making. For the PT Wearable Art show (Port Townsend), I used the extremes of wool’s capability. I’ve tried my hand with the delicate application of nuno felting to create a wedding dress. The Animals in the Landscape Coat was inspired by a Franz Marc painting. My ‘painting’ wrapped around the long coat and it’s circular draped tail added drama to its movement. The Horned Mask is a densely felted sculpture.  The possibilities to create with wool are endless.
          </p>
          <p>Nuno Felting is achieved through the stacking & layering of merino wool fibers onto hand dyed silk, carefully varying their lengths & alignments in a fashion that allows for controlled shrinkage. The resulting felt maintains just the right amount of movement & drape for its function as good design & clothing. </p>
          <p> - Donna</p> */}
        </div>
        <ul className="cb-slideshow">
          <li>
            <span>Image 01</span>
            <span>Image 02</span>
            <span>Image 03</span>
            <span>Image 04</span>
            <div>
              {/* <h3>re·lax·a·tion</h3> */}
            </div>
          </li>
        </ul>
      </div>
    );
  }

}

export default Home;
