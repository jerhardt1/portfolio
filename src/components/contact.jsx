import React, { Component } from "react";
import me from "../assets/me.jpg";
import ContactForm from "./contactForm";
import Platforms from "./platforms";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

class Contact extends Component {
  state = {};

  render() {
    return (
      <section id="contact">
        <div className="block block--wrap-reverse">
          <Fade bottom>
            <div className="block__aside">
              <ContactForm />
              <Platforms />
            </div>
          </Fade>
          <Fade top>
            <div className="block__content block__content--secondary">
              <div className="image_wrapper--large">
                <img src={me} alt="" />
              </div>
              <div className="row">
                <div className="text_block ">
                  <RubberBand delay={700}>
                    <h1 className="text_block__header text_block__header--primary">
                      about me
                    </h1>
                  </RubberBand>

                  <p className="text_block__text">
                    I am occupied as a fulltime senior 3d artist based in
                    Berlin, working on games for various platforms. My desire to
                    unravel the secrets of creating art for games and virtual 3d
                    environments in general, made me pursue a career in digital
                    art.
                  </p>
                </div>
                <div className="text_block text_block--only_margin_bottom">
                  <p className="text_block__text">
                    Coding is a big passion of mine. In my freetime I try to
                    work on projects that I enjoy and constantly develop my
                    skills and knowledge in the area of programming. I got into
                    web programming, when I was studying frontend development
                    during my training as a media designer. The discovery of
                    python and the django framework manifested my presence in
                    this area.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Contact;
