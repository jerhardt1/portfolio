import React, { Component } from "react";
import me from "../assets/me.jpg";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <section className="aboutMe" id="contact">
        <div className="block">
          <div className="block__aside">
            {/* <div className="image_wrapper--round">
              <img src={me} alt="" />
            </div> */}
            <div className="text_block">
              <h1 className="text_block__header text_block__header--primary">
                about me
              </h1>

              <p className="text_block__text">
                I currently focus on front end development with expertise in
                HTML5, CSS3/SASS and JavaSc ript. ReactJS is my frontend
                framework of choice.
              </p>
              <p className="text_block__text">
                My skillset also includes back end knowledge in regards to
                Python and Django. I plan on extending my knowledge in this area
                in the future.
              </p>
            </div>
          </div>
          <div className="block__content block__content--secondary">
            <div className="block__content__row">
              <div className="image_wrapper--round"></div>
              <div className="text_block">
                <h1 className="text_block__header">e-commerce demo</h1>
                <p className="text_block__text">
                  Goal of this project was to demonstrate some essential front
                  end skills and implement classic functionalites that can be
                  found on a typical e-commerce website.
                </p>
                <p className="text_block__text">
                  As the design was not the primary concern, the site does not
                  behave in a responsive way yet. Nethertheless, the site
                  includes the use of a self-made back end/REST api which serves
                  it's purpose, but still requires a lot of optimizations to be
                  made.
                </p>
              </div>
            </div>
            <div className="block__content__row">
              <div className="text_block">
                <h1 className="text_block__header">online-portfolio</h1>
                <p className="text_block__text">
                  This personal website serves as a way to showoff a
                  nice-looking and simple way to display pre-defined content on
                  a webpage.
                </p>
                <p className="text_block__text">
                  Responsiveness, nice design and reliable functionalites were
                  the key elements of this project. This site serves as a
                  longterm project to experiment with different designs and
                  interesting ways to interact with the user.
                </p>
              </div>
              <div className="image_wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
