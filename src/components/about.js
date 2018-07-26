import React, { Component } from 'react';
// import donnaHeadshot from '../assets/donnaHeadshot.jpg'
import '../css/about.css'
class About extends Component {

  render() {
    return (
      <div className='aboutContainer'>
        <h2>ABOUT</h2>
        <p>
          My passion comes from an old family tradition of garment making. My great grandfather through each generation to myself are tailors...each in our own way.
        </p>
        <p>
          My love of the outdoors led me to pursue degrees in Environmental Education (BS) and Landscape Architecture (MLA) from the University of Michigan. Landscape Architecture is, at its core, a design process that encourages a fluid and intuitive relationship between the built environment and the natural, dynamic elements that envelope it. At its best a good design enhances the best qualities of both nature and structure.
        </p>
        <p>
          In my clothing designs there is a flow of color, form, texture and structure that is not unlike the movement in a garden. I use a similar skill set that I do in designing a garden. My goal is to enhance the qualities of the structure of the human body.
        </p>

        <div className='headshotContainer'></div>

        <div className='quote'>
          <p><q>Be flexible. Don’t be defined. I’m an artist because I want to be free.  Whatever makes you free and feel really good, that’s what you do. It’s that simple.</q></p>
          <p> - Laurie Anderson</p>
        </div>
      </div>
    );
  }

}

export default About;
