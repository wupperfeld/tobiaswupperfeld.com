import React from "react";
import "./App.css";
import About from "./About";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Cta from "./Cta";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <About />
      <Container maxWidth="lg">
        <Portfolio />
        <Cta />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
