import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="nav">
        <Fade top>
          <ul className="navbar" id="navbar">
            {/* <li className="navbar__item">
              <HashLink smooth to="#start" className="link">
                <h2 className="font">start</h2>
              </HashLink>
            </li> */}
            <li className="navbar__item">
              <HashLink smooth to="#webDev" className="link">
                <h2 className="font">web dev</h2>
              </HashLink>
            </li>
            <li className="navbar__item">
              <HashLink smooth to="#3dArt" className="link">
                <h2 className="font">3d art</h2>
              </HashLink>
            </li>
            <li className="navbar__item">
              <HashLink smooth to="#contact" className="link">
                <h2 className="font">contact</h2>
              </HashLink>
            </li>
          </ul>
        </Fade>
      </nav>
    );
  }
}

export default Navbar;
