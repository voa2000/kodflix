import React, { Component } from "react";
import Cover from "../Cover/Cover";
import Loading from "../Loading/Loading";
import "../App.css";
export class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      movies: "",
      error: ""
    };
  }
  componentDidMount() {
    fetch(`/rest/shows`)
      .then(res => res.json())
      .then(movies => {
        this.setState({
          movies
        });
      })
      .catch(() => this.setState({ error: "Movies not found!" }));
  }

  render() {
    return (
      <div>
        <h1>Click on a cover to find out more about it.</h1>
        <div className="container">
          {this.state.movies ? (
            this.state.movies.map(movie => (
              <Cover key={movie.id} id={movie.id} title={movie.title} />
            ))
          ) : (
            <div className="loading-container">
              <Loading />
            </div>
          )}
        </div>
      </div>
    );
  }
}
