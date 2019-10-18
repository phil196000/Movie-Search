import React, { Component } from "react";
import Footer from "./Footer";

class Body extends Component {
  render() {
    return (
      <div>
        <Footer data={this.props.profile} />
        <p>Name:{this.props.profile.name}</p>
        <p>Age: {this.props.profile.age}</p>
        <p>Height: </p>
        <p>student: </p>
      </div>
    );
  }
}
export default Body;
