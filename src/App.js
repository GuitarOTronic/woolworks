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

    }
  }





  render() {
    return (
      <Router >
        <div>
          <header className="header">
            <Header />
          </header>
          <div className="mainContainer">

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
