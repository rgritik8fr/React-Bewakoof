import React, { Component } from "react";
import "./Input.css";

export class Input extends Component {
  render() {
    return (
      <>
        <div className={`${this.props.css}`}>
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            name={this.props.name}
            onChange={this.props.change}
            value={this.props.value}
          />
        </div>
      </>
    );
  }
}

export default Input;
