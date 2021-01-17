import React, { Component } from "react";
import Explosion from "./explosion";

class Hole extends Component {
  state = { hover: false };

  enter = () => {
    console.log("enter");
    this.setState({ hover: true });
  };

  render() {
    const { holes } = this.props;
    return (
      <React.Fragment>
        {holes.map((hole) => (
          <div
            className="circle"
            style={{ left: `${hole.left}`, top: `${hole.top}` }}
            onMouseEnter={this.enter}
            onMouseLeave={() => console.log("leave")}
          >
            {this.state.hover && <Explosion />}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Hole;
