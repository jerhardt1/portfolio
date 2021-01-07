import React, { Component } from "react";

import Landing from "./landing";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content" id="container">
        {/* <Landing></Landing>
        <Projects></Projects>
        <About></About>
        <Contact></Contact> */}
      </div>
    );
  }
}

export default Home;
