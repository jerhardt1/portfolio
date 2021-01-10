import React, { Component } from "react";

import Landing from "./landing";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import AboutArt from "./aboutArt";
import AboutMe from "./aboutMe";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content" id="container">
        <Landing />
        <About />
        <AboutArt />
        <AboutMe />
      </div>
    );
  }
}

export default Home;
