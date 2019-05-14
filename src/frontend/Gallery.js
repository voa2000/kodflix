import React, { Component } from "react";
import Movies from "./Movies";
import getMovies from "./movies-get";

export class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
    fetch("/rest/shows")
      .then(res => res.json())
      .then(movies =>
        console.log("Movies fetched ...", JSON.stringify(movies))
      );

    render() {
      return (
        <div className="container">
          {getMovies().map(({ id, title, logo }) => (
            <Movies key={id} movieId={id} title={title} logo={logo} />
          ))}
        </div>
      );
    }
  }