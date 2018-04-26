import React, { Component } from 'react';
// import donnaHeadshot from '../assets/donnaHeadshot.jpg'
import '../css/about.css'
class About extends Component {

  render() {
    return (
      <div className='aboutContainer'>
        <h2>ABOUT</h2>
        <p>I love the light, reflections and colors that accompany the change of the seasons. My love of the outdoors led me to pursue degrees in Environmental Education (BS) and Landscape Architecture (MLA) from the University of Michigan. For several generations my family have been garment makers. Fiber art allows me to combine my tailoring heritage with my environmental career pursuits. I create whimsical pieces inspired by the natural world that I am so attracted to on a daily basis. In creating my pieces, I use a similar skill set that  I do in designing a garden. There is a flow of color and form within my fiber creations that is not unlike the movement in a garden. </p>
        <div className='headshotContainer'>
          {/* <img src = { donnaHeadshot} alt='artist head shot '/> */}
        </div>
      </div>
    );
  }

}

export default About;
