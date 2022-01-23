import React, { Component } from "react";
import "./Imagediv.css";

export class Imagediv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <img src={this.props.src} alt="" />
      </>
    );
  }
}

export default Imagediv;
