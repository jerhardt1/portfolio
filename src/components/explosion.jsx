import React, { Component } from "react";
import ApngComponent from "react-apng";
import explosion from "../assets/explosion.png";

class Explosion extends Component {
  state = {};

  render() {
    return <ApngComponent autoPlay={true} src={explosion} rate={1} />;
  }
}

export default Explosion;
