import React, { Component } from "react";
import buyshop from "../assets/buyshop.png";
import portfolio from "../assets/portfolio.png";
import TagWall from "./tagWall";
import { shuffle } from "../utils/shuffle";

class About extends Component {
  state = {};

  render() {
    let tags = [
      "HTML5",
      "CSS3",
      "SASS",
      "BEM",
      "jQuery",
      "JavaScript",
      "JSON",
      "ReactJS",
      "Python",
      "Django",
      "REST",
      "Bootstrap",
      "git",
      "SourceTree",
      "Heroku",
      "NodeJS",
      "npm",
      "C#",
    ];

    tags = shuffle(tags);
    return (
      <section className="about" id="webDev">
        <div className="block">
          <div className="block__aside">
            <div className="text_block">
              <h1 className="text_block__header text_block__header--primary">
                web development
              </h1>
              <p className="text_block__text">
                I currently focus on front end development with expertise in
                HTML5, CSS3/SASS and JavaScript. ReactJS is my frontend
                framework of choice.
              </p>
              <p className="text_block__text">
                My skillset also includes back end knowledge in regards to
                Python and Django. I plan on extending my knowledge in this area
                in the future.
              </p>
            </div>
            <TagWall tags={tags} />
          </div>
          <div className="block__content block__content--secondary">
            <div className="block__content__row">
              <div className="image_wrapper">
                <img src={buyshop} alt="buyshop" />
              </div>
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
              <div className="image_wrapper">
                <img src={portfolio} alt="buyshop" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

{
  /* <p>
          My fascination for programming sparked up since I got my first
          computer with a stable internet connection. After that I joined
          all the programming courses my schools had to offer. <br />
          <br></br>
          During my training as a Media Designer, I've been educated in
          Frontend Development with knowledge in HTML, CSS and
          Javascript/Jquery. After starting to develop my own scripts for
          some programs with Python, I dived deeper into the world of web
          development with the discovery of the django framework. I use
          python and django for backend and REST APIs, whereas React is my
          goto framework when it comes to the frontend.
          </p> */
}
