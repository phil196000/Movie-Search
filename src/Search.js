import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
  render() {
    return (
      <di>
        <img
          className="Search-icon"
          src={require("./assets/icons8_search_50px.png")}
          alt="search"
          onClick={this.props.onClick}
        />
        <input
          onChange={this.props.onChange}
          className="Search"
          placeholder="Find whatever you want"
        />
      </di>
    );
  }
}
