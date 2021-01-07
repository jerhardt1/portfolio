import React, { Component } from "react";
import buyshop from "../assets/buyshop.jpg";
import art01 from "../assets/art01.jpg";
import art02 from "../assets/art02.jpg";
import art03 from "../assets/art03.jpg";
import art04 from "../assets/art04.jpg";

class Projects extends Component {
  state = {};
  render() {
    return (
      <section id="projects">
        <div className="block">
          <div className="projects">
            <div className="projects__dev">
              <h3>Web Dev Projects</h3>
              <ul className="projects__dev__images">
                <li>
                  <img src={buyshop} alt="" />
                </li>
                <li>
                  <img src={buyshop} alt="" />
                </li>
              </ul>
            </div>

            <div className="projects__art">
              <h3>3D Art Projects</h3>
              <ul className="projects__art__images">
                <li>
                  <img src={art01} alt="" />
                </li>
                <li>
                  <img src={art02} alt="" />
                </li>
                <li>
                  <img src={art03} alt="" />
                </li>
                <li>
                  <img src={art04} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
