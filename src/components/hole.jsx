import React, { Component } from "react";

class Hole extends Component {
  state = {};

  render() {
    const { holes } = this.props;
    return (
      <React.Fragment>
        {holes.map((hole) => (
          <div
            className="circle"
            style={{ left: `${hole.left}`, top: `${hole.top}` }}
          >
            {" "}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Hole;
