import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Nav />
            <About />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Nav />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
