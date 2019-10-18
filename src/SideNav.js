import React, { Component } from "react";
import "./SideNav.css";

export default class SideNav extends Component {
  navItems = [{ name: "films" }, { name: "Series" }, { name: "My List" }];
  otherNav = [
    {
      name: "All Films",
      imgSrc: "./assets/icons8_film_32px.png"
    },
    { name: "Features", imgSrc: "./assets/icons8_features_list_50px.png" },
    { name: "Documents", imgSrc: "./assets/icons8_documentary_50px.png" },
    { name: "Shorts", imgSrc: "./assets/icons8_short_50px.png" },
    { name: "TV Shows", imgSrc: "./assets/icons8_retro_tv_50px.png" },
    { name: "Commercials", imgSrc: "./assets/icons8_commercial_24px.png" }
  ];
  render() {
    return (
      <div className="container">
        <div className="title">MOVIBAZAR</div>
        <ul className="categories">
          {this.navItems.map((data, key) => (
            <li key={key}>{data.name}</li>
          ))}
        </ul>
        <ul>
          {this.otherNav.map((navItem, index) => (
            <li key={index} className="otherNavItems">
              <img
                className="otherNavIcons"
                src={require(`${navItem.imgSrc}`)}
                alt="icon"
              />
              <span>{navItem.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
