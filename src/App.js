import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import Events from './components/events.js'
import Gallery from './components/gallery.js'
import Home from './components/home.js'
import Workshop from './components/workshop.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      extendHamburger:false,
    }
  }


  handleExtendHamburger=()=>{
    this.setState({
      extendHamburger:!this.state.extendHamburger
    })
  }


  render() {
    return (
      <Router >
        <div >
          <div className="header">
            <Header 
              handleExtendHamburger={this.handleExtendHamburger}
              extendHamburger={this.state.extendHamburger}

            />
          </div>
          <div onClick={()=> this.setState({extendHamburger:false})} className="mainContainer">

            <Route path='/about'
              component={ About }
            />
            <Route path='/gallery'
              component={ Gallery }
            />
            <Route path='/events'
              component={ Events }
            />
            <Route path='/workshop'
              component={ Workshop }
            />
            <Route path='/contact'
              component={ Contact }
            />
            <Route exact path='/'
              component={ Home }
            />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
