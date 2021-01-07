import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="about" id="about">
        <div className="block">
          <div className="block__header">
            <h1>About</h1>
          </div>
          <div className="block__content">
            <div className="skills">
              <div className="skills__dev">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3/sass</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className="skills__art">
                <ul>
                  <li>Maya</li>
                  <li>3Ds Max</li>
                  <li>Blender</li>
                  <li>ZBrush</li>
                  <li>Substance</li>
                  <li>Marvelous Designer</li>
                  <li>World Machine</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Unity 3D</li>
                  <li>Unreal Engine 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
