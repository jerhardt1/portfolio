import React, { Component } from "react";
import TagWall from "./tagWall";
import { shuffle } from "../utils/shuffle";

import art01 from "../assets/art01.jpg";

import art02 from "../assets/art02.jpg";
import art03 from "../assets/art03.jpg";
import art04 from "../assets/art04.jpg";
import art05 from "../assets/art05.jpg";
import art06 from "../assets/art06.jpg";
import art07 from "../assets/art07.jpg";
import art08 from "../assets/art08.jpg";
import art09 from "../assets/art09.jpg";

class AboutArt extends Component {
  state = {};
  render() {
    let tags = [
      "Maya",
      "3Ds Max",
      "Blender",
      "Unity 3D",
      "Unreal Engine 4",
      "World Machine",
      "Marvelous Designer",
      "Photoshop",
      "Illustrator",
      "Substance",
      "Modeling",
      "Animation",
      "Rigging",
      "Texturing",
      "Shaders",
      "Technical Art",
      "Scriping",
      "ZBrush",
      "Hard Surface",
      "Characters",
      "Sculpting",
      "Low-/Highpoly",
      "Baking",
      "FX",
    ];

    tags = shuffle(tags);
    return (
      <section className="aboutArt" id="3dArt">
        <div className="block block--reverse">
          <div className="block__content block__content--primary">
            <div className="grid">
              <div className="image_wrapper--grid">
                <img src={art01} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art02} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art03} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art04} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art05} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art06} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art07} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art08} alt="" />
              </div>
              <div className="image_wrapper--grid">
                <img src={art09} alt="" />
              </div>
            </div>
          </div>
          <div className="block__aside">
            <div className="text_block">
              <h1 className="text_block__header text_block__header--secondary">
                3D Art
              </h1>
              <p className="text_block__text">
                With a degree in Computer Games Art I heavily specialize in
                realtime 3D Art for games or any other realtime environments
                like Virtual/Augmented Reality.
              </p>
              <p className="text_block__text">
                My tasks span over modeling, texturing, rigging, animating and
                optimizing assets. But also technical aspects like writing
                shaders, scripts or logic in general are no problem.
              </p>
            </div>
            <TagWall modifier="--secondary" tags={tags} />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutArt;
