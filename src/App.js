import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-dom'

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
      // <Router >
        <div className="mainContainer">
          <header className="header">
            {/* <h1 className="App-title">Lark Studios: Wool Works</h1> */}
            <Header />
          </header>
          {/* <Route path='/about'
            component={ About }
          /> */}
        </div>
    // </Router>
    );
  }
}

export default App;
