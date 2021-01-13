import React, { Component } from 'react';
import './App.css';
import Contact from './Contact'
import  Home from './Home'
import Stuff from './Stuff'
import simbiose from './simbiose.png'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <div className="header">
        <img id = 'logo' src={simbiose}/>
          <ul>
            {/*<li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>*/}
            <li><NavLink exact to="/" className = 'navLink'>Home</NavLink></li>
            <li><NavLink to="/stuff" className = 'navLink'>Stuff</NavLink></li>
            <li><NavLink to="/contact" className = 'navLink'>Contact</NavLink></li>
          </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
