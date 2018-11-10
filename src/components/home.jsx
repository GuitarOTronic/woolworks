import React, { Component } from 'react';
// import CarouselComponent from './carouselComponent.js'
import { Row, Col } from 'react-bootstrap'
import '../css/home.css'
import BackgroundImages from './backgroundImages'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    this.startCount()
  }

  startCount = () => {
    console.log('start timer')
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   this.getBackground()
    // })
    window.setInterval(() => {

      this.setState({ counter: this.state.counter + 1 }, )
    }, 1000)

  }

  getBackground = (id) => {
    window.setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
    // return (<div className={`bg bg-slide-${this.state.counter}`}>
    //   <ul >
    //     <li>
    //       <span>Image 1</span>
    //       <div>
    //         <h3>pucker up {this.state.counter}</h3>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    // )
  }


  renderBackgrounds = () => {
    if (this.state.counter < 7) {
      this.setState({ counter: this.state.counter + 1 }, () => {
        this.getBackground()
      })
    } else {
      this.setState({ counter: 0 })
    }

  }

  render() {
    return (
      <BackgroundImages />
        // <Row>
          // {/* <Col sm={12}> */}
            
          // {/* </Col> */}
        // </Row>
        //  <div className='homeCopy'>
        //   <p>
        //     I’m intrigued by the alchemy of felt making. For the PT Wearable Art show (Port Townsend), I used the extremes of wool’s capability. I’ve tried my hand with the delicate application of nuno felting to create a wedding dress. The Animals in the Landscape Coat was inspired by a Franz Marc painting. My ‘painting’ wrapped around the long coat and it’s circular draped tail added drama to its movement. The Horned Mask is a densely felted sculpture.  The possibilities to create with wool are endless.
        //   </p>
        //   <p>Nuno Felting is achieved through the stacking & layering of merino wool fibers onto hand dyed silk, carefully varying their lengths & alignments in a fashion that allows for controlled shrinkage. The resulting felt maintains just the right amount of movement & drape for its function as good design & clothing. </p>
        //   <p> - Donna</p>
        // </div> 

    );
  }

}

export default Home;
