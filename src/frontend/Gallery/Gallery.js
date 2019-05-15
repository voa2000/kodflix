import React, { Component } from "react";
import Cover from "../Cover/Cover";

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
        console.log(movies);
        this.setState({
          movies
        });
      })
      .catch(() => this.setState({ error: "Movies not found!" }));
  }
  render() {
    return (
      <div className="container">
        {this.state.movies
          ? this.state.movies.map(movie => (
              <Cover key={movie.id} id={movie.id} title={movie.title} />
            ))
          : null}
      </div>
    );
  }
}
