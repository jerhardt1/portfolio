import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";
import Navbar from "./navbar";
import Platforms from "./platforms";
import Fade from "react-reveal/Fade";

class Landing extends Component {
  state = { typed: false };

  fadeInWelcome = () => {
    let name = "intro__name__welcome";
    name = this.state.typed ? name + " opaque" : name;

    return name;
  };

  fadeInButton = () => {
    let name = "intro__box";
    name = this.state.typed ? name + " opaque" : name;

    return name;
  };

  render() {
    const text =
      ' a <span style="color: white;">web dev</span> & <span style="color: white;">3d artist</span>.';
    return (
      <section id="start">
        <div className="block">
          <Navbar />
          <Platforms />

          <Fade left>
            <div className="intro">
              <div className="intro__name">
                Hello! <br /> I am <br />
                <span className={this.fadeInWelcome()}>Welcome!</span>
                <div className="intro__professions">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 50,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(2000)
                        .typeString(text)
                        .start()
                        .pauseFor(200)
                        .callFunction(() => {
                          this.setState({ typed: true });
                        });
                    }}
                  />
                </div>
                Johann <br /> Erhardt.
                <HashLink smooth to="#webDev" className="link">
                  <div className={this.fadeInButton()}>
                    <span>
                      This <br /> way! <br />
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="currentColor"
                      class="bi bi-arrow-down-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </div>
                </HashLink>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Landing;
