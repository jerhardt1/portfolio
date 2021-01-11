import React, { Component } from "react";

import Landing from "./landing";
import About from "./about";
import AboutArt from "./aboutArt";
import Contact from "./contact";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content" id="container">
        <Landing />
        <About />
        <AboutArt />
        <Contact />
      </div>
    );
  }
}

export default Home;
