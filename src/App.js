import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/HomePage/index.js";
import PlayNow from "./components/PlayNow";
import Features from "./components/Features";
import News from "./components/News";
import Support from "./components/Support";
import Forum from "./components/Forum/index.js";
import Navigation from "./components/Navigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/playnow" component={PlayNow} />
          <Route path="/features" component={Features} />
          <Route path="/news" component={News} />
          <Route path="/forum" component={Forum} />
          <Route path="/support" component={Support} />
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
