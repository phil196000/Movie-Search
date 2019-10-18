import React, { Component } from "react";
import "./MovieCard.css";

const baseImageUrl = "http://image.tmdb.org/t/p/w500";
export default class MovieCard extends Component {
  render() {
    return (
      <div className="MovieCard">
        <img
          alt="movie"
          src={`${baseImageUrl}${this.props.movie.poster_path}`}
          className="MovieImage"
        />
        <span className="title-movie">{this.props.movie.title}</span>
      </div>
    );
  }
}
