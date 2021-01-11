import React, { Component } from "react";
import me from "../assets/me.jpg";
import ContactForm from "./contactForm";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact" id="contact">
        <div className="block">
          <div className="block__aside">
            <ContactForm />
          </div>
          <div className="block__content block__content--secondary">
            <div className="image_wrapper--round">
              <img src={me} alt="" />
            </div>
            <div className="row">
              <div className="text_block">
                <h1 className="text_block__header text_block__header--primary">
                  about me
                </h1>

                <p className="text_block__text">
                  I am occupied as a fulltime senior 3d artist based in Berlin,
                  working on games for various platforms. My desire to unravel
                  the secrets of creating art for games and virtual 3d
                  environments in general, made me pursue a career in digital
                  art.
                </p>
              </div>
              <div className="text_block__text">
                <p className="text_block__text">
                  Coding is a big passion of mine. In my freetime I try to work
                  on projects that I enjoy and constantly develop my skills and
                  knowledge in the area of programming. I got into web
                  programming, when I was studying frontend development during
                  my training as a media designer. The discovery of python and
                  the django framework manifested my presence in this area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
