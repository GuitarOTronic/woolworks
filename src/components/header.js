import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bars } from 'react-icons-kit/fa/bars'
import Icon from 'react-icons-kit'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // extendHamburger:this.props.extendHambuger,

    }
  }

  handleExtendHamburger = () => {
    this.props.handleExtendHamburger()
  }

  render() {
    return (
      <div className='headerOuterContainer'>

          <div className='brand'>
            <h1>DONNA LARK FELTS </h1>
          </div>

        <div className='linksContainer'>
          <ul className='navLinks'>
            <Link to='/'><li>Home</li></Link>

            {/* <Link to='gallery'><li>Gallery</li></Link> */}

            <Link to='events'><li>Events</li></Link>

            {/* <Link to='workshop'><li>Workshop</li></Link> */}

            <Link to='about'><li>About</li></Link>

            <Link to='contact'><li>Contact</li></Link>
          </ul>

          {this.state.extendHambuger ? '' : <div className='hamburger'>
            <Icon onClick={this.handleExtendHamburger} size={32} icon={bars}></Icon>
          </div>}
        </div>

        {this.props.extendHamburger ?
          <ul className='hamburgerUl'>
            <Link to='/'><li onClick={()=>this.handleExtendHamburger()}>Home</li></Link>

            {/* <Link to='gallery'><li>Gallery</li></Link> */}

            <Link to='events'><li onClick={()=>this.handleExtendHamburger()}>Events</li></Link>

            {/* <Link to='workshop'><li>Workshop</li></Link> */}

            <Link to='about'><li onClick={()=>this.handleExtendHamburger()}>About</li></Link>

            <Link to='contact'><li onClick={()=>this.handleExtendHamburger()}>Contact</li></Link>
          </ul> :
          ""
        }
      </div>
    );
  }

}

export default Header;
