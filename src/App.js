import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SideNav from "./SideNav";
import Search from "./Search";
import MovieCard from "./MovieCard";

const API = "9835b7f2d3ea6e84d94221d5d7d616ea";
class App extends Component {
  state = {
    searchValue: "hi",
    results: []
  };

  fetchMovie = () => {
    // Make a request for a user with a given ID
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9835b7f2d3ea6e84d94221d5d7d616ea&language=en-US&query=${this.state.searchValue}&page=1&include_adult=false`
      )
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          results: response.data.results
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
  render() {
    return (
      <div className="App">
        <SideNav />
        <div className="otherContainer">
          <Search
            onChange={event => {
              // console.log(event.target.value);
              this.setState({
                searchValue: event.target.value
              });
            }}
            onClick={this.fetchMovie}
          />
          <div className="movieContainer">
            {this.state.results.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
          {/* <span>{this.state.searchValue}</span> */}
        </div>
      </div>
    );
  }
}
export default App;
