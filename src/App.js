import React from "react";
import "./App.css";
import Home from './Components/Home'
import About from './Components/About/About.js'
import Event from './Components/Events/Event'
import Header from './Components/Header'
import Projects from "./Components/Projects/Projects";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Banner from './Components/Banner'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/event" >
            <Header />
            <Event/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Header />
            <Banner />
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
