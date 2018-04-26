import React, { Component } from 'react';
import Carousel from './carousel.js'
import '../css/home.css'
class Home extends Component {

  render() {
    return (
      <div className='homeContainer'>
        <h2>WOOL WORKS BY DONNA</h2>
        <Carousel />
        <hr></hr>
        <p>I love the light, reflections and colors that accompany the change of the seasons. My love of the outdoors led me to pursue degrees in Environmental Education (BS) and Landscape Architecture (MLA) from the University of Michigan. For several generations my family have been garment makers. Fiber art allows me to combine my tailoring heritage with my environmental career pursuits. I create whimsical pieces inspired by the natural world that I am so attracted to on a daily basis. In creating my pieces, I use a similar skill set that  I do in designing a garden. There is a flow of color and form within my fiber creations that is not unlike the movement in a garden.
        </p>
        <p>
        The felting process allows for the formation of paper-thin material which is then sculpted from within while the material is wet. “Fulling,” is accomplished through vigorous agitation --rubbing with a variety of ridgid tools, slapping and throwing the wet object against washboards The resulting  shrinkage ‘tightens’ the wool into a refined shape. As in my scarf-making the nuno felting technique allows me to “paint” the surface with colorful wool fibers while maintaining the light  and airy dynamic of fine silk.
      </p>
      <p>
        I am represented this year at Chihuly Garden and Glass Bookstore (Seattle, WA), Jardin du Soleil, (Sequim, WA), Angelwood Gallery, (Grand Rapids, OH), Hudson Gallery, (Sylvania, OH),  Red Door Gallery (Ludington, MI),  and Synchronicity Gallery (Glen Arbor, MI).
      </p>
      </div>
    );
  }

}

export default Home;
