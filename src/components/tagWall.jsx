import React, { Component } from "react";
import Hole from "./hole";

class TagWall extends Component {
  state = { holes: [] };

  constructor(props) {
    super(props);
    this.explosion = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  handleResize = () => {
    this.setState({ holes: [] });
  };

  spawnHole = (e) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    const holes = [...this.state.holes];
    let newHoles = holes;
    if (newHoles.length >= 10) {
      newHoles.shift();
    }
    newHoles = newHoles.concat({
      left: (e.clientX - rect.left - 40).toString() + "px",
      top: (e.clientY - rect.top - 40).toString() + "px",
    });

    this.setState({ holes: newHoles });
  };

  getClassName = () => {
    const { modifier } = this.props;
    let name = "block__aside__tags__item";

    name = modifier ? name + " " + name + modifier : name;

    return name;
  };

  render() {
    let { tags } = this.props;
    const { holes } = this.state;
    return (
      <div className="block__aside__tags">
        {tags.map((tag) => (
          <div className={this.getClassName()}>{tag}</div>
        ))}
        <Hole holes={holes} />
      </div>
    );
  }
}

export default TagWall;
