import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class Landing extends Component {
  state = {};
  render() {
    return (
      <section id="start">
        <div className="block">
          <div className="intro"></div>
        </div>
      </section>
      // <section className="landing" id="start">
      //   {/* <div className="landing__backdrop">PORTFOLIO</div> */}
      //   <div className="block">
      //     <div className="intro">
      //       {/* <div class="background" src="/backdrop01.jpg" alt="" /> */}
      //       <div className="intro__name">
      //         <HashLink to="#about" smooth className="link">
      //           <h1 className=" font font--soft">
      //             Johann <br></br>Erhardt
      //           </h1>
      //         </HashLink>
      //       </div>
      //       <div className="intro__professions">
      //         <HashLink smooth to="#projects" className="link">
      //           <div className="intro__professions__first">
      //             <h1 className="font">Web Dev</h1>
      //           </div>
      //         </HashLink>
      //         <HashLink smooth to="#projects" className="link">
      //           <div className="intro__professions__last">
      //             <h1 className="font">3D Artist</h1>
      //           </div>
      //         </HashLink>
      //       </div>
      //     </div>
      //     {/* <div className="block__arrow">
      //       <HashLink smooth to="/#projects" className="link">
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           width="64"
      //           height="64"
      //           fill="currentColor"
      //           class="bi bi-arrow-bar-down"
      //           viewBox="0 0 16 16"
      //         >
      //           <path
      //             fill-rule="evenodd"
      //             d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
      //           />
      //         </svg>
      //       </HashLink>
      //     </div> */}
      //   </div>
      // </section>
    );
  }
}

export default Landing;
