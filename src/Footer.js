import React, { Component } from "react";

class Footer extends Component {
  hello = {
    hi: "Alhassan"
  };
  hi = () => {
    return this.hello.hi;
  };
  render() {
    return (
      <div>
        <p>{this.props.data.age}</p>
      </div>
    );
  }
}
export default Footer;
