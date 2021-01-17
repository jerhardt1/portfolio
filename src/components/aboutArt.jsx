import React, { Component } from "react";
import TagWall from "./tagWall";
import { shuffle, openWeblink } from "../utils/helpers";
import { tagsArt, imagesArt } from "./../assets/data";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";

class AboutArt extends Component {
  state = {};

  render() {
    let tags = tagsArt;
    tags = shuffle(tags);
    const images = imagesArt;

    const linkIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-link-45deg"
        viewBox="0 0 16 16"
        className="grid__icon"
      >
        <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
      </svg>
    );
    return (
      <section className="aboutArt" id="3dArt">
        <div className="block block--reverse block--wrap-reverse">
          <Fade top>
            <div className="block__content block__content--primary">
              <div className="grid">
                {images.map((image) => (
                  <div
                    className="image_wrapper--grid"
                    onClick={() => openWeblink(image.link)}
                  >
                    {" "}
                    {linkIcon}
                    <img src={image.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="block__aside">
              <div className="text_block">
                <RubberBand delay={700}>
                  <h1 className="text_block__header text_block__header--secondary">
                    3d art
                  </h1>
                </RubberBand>
                <p className="text_block__text">
                  With a degree in Computer Games Art I heavily specialize in
                  realtime 3d art for games or any other realtime environments
                  like Virtual/Augmented Reality.
                </p>
                <p className="text_block__text">
                  My tasks span over modeling, texturing, rigging, animating and
                  optimizing assets. But also technical aspects like writing
                  shaders, scripts or logic in general are no problem.
                </p>
                <p className="text_block__text">
                  You can{" "}
                  <span
                    className="hyperlink"
                    onClick={() =>
                      openWeblink("https://www.artstation.com/johannerhardt")
                    }
                  >
                    click here
                  </span>{" "}
                  to view all of my public projects on arstation so far.
                </p>
              </div>

              <TagWall modifier="--secondary" tags={tags} />
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default AboutArt;
