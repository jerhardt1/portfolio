import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class Navbar extends Component {
  state = {};

  componentDidMount = () => {
    this.container = document.getElementById("container");
    this.navbar = document.getElementById("navbar");
    this.navbarNavigation = document.getElementById("navbar__navigation");
    this.container.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    this.container.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (event) => {
    event.stopPropagation();
    const container = this.container;
    const navbar = this.navbar.getBoundingClientRect();

    let percentage = Math.abs(
      container.scrollTop / container.scrollHeight
    ).toFixed(3);

    let offset = Math.abs(navbar.height * percentage);

    this.navbarNavigation.style.top = offset.toString() + "px";
  };

  render() {
    return (
      <header className="header">
        <ul className="navbar" id="navbar">
          <li className="navbar__item">
            <HashLink smooth to="#start" className="link">
              <h2 className="font">Start</h2>
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink smooth to="#projects" className="link">
              <h2 className="font">Projects</h2>
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink smooth to="#about" className="link">
              <h2 className="font">About</h2>
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink smooth to="#contact" className="link">
              <h2 className="font">Contact</h2>
            </HashLink>
          </li>
          <li className="navbar__navigation" id="navbar__navigation"></li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
