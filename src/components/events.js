import React, { Component } from 'react';
import '../App.css'
class Events extends Component {

  render() {
    return (<div>
      <h3> EVENTS</h3>
      <h4 style={{paddingTop:'2rem'}}>Shows 2018-2019</h4>
      <ul className='eventLink'>
        <li > <a href='https://www.bellevuedowntown.com/events/6th-street-fair'>Bellevue 6th Street Fair July 27 - 29</a></li>
        <li> <a href='http://anacortesartsfestival.com/'>Anacortes Art Festival  Aug 3 - 5</a></li>
        <li> <a href='http://www.bistudiotour.com/'>Bainbridge Island Studio Tour  August 10 - 12 </a></li>
        <li> <a href='http://www.bistudiotour.com/'>Bainbridge Island Studio Tour Dec 1 - 3</a></li>
        <li><a href='https://www.gardenshow.com/'>Northwest Flower and Garden Show Feb 20 - 24, 2019</a> </li>
      </ul>
    </div>
    );
  }

}

export default Events;
