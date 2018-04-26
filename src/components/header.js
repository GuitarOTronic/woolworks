import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {

  render() {
    return (
      <div className='headerContainer'>
        <div className='brand'>
          <h1>Donna Lark-Weiner </h1>
        </div>
        <ul className='navLinks'>
          <Link to='/'><li>Home</li></Link>
          <li>•</li>
          <Link to='gallery'><li>Gallery</li></Link>
          <li>•</li>
          <Link to='events'><li>Events</li></Link>
          <li>•</li>
          <Link to='workshop'><li>Workshop</li></Link>
          <li>•</li>
          <Link to='about'><li>About</li></Link>
          <li>•</li>
          <Link to='contact'><li>Contact</li></Link>
        </ul>
      </div>
    );
  }

}

export default Header;
