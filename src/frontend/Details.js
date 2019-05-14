import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.movieId,
      moviesData: []
    };
  }
  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    fetch("/rest/shows/")
      .then(res => res.json())
      .then(movies => {
        let moviesData = movies.find(movie => (movie.id = movieId));
        this.setState({ moviesData }, () =>
          console.log("my state", this.state.moviesData)
        );
      });
  }

  render() {
    let { title, synopsis } = this.state.moviesData;
    let id = this.props.match.params.movieId;
    if (this.props.match.params.movieId === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="App">
          <div className="details-title">
            <h1>{title}</h1>
          </div>
          <div className="details-container">
            <div className="details-text-item">
              <p>{synopsis}</p>
            </div>
            <div className="details-image-item">
              <img
                src={require(`./common/images/details/${id}.jpg`)}
                alt={title}
              />
            </div>
          </div>
          <Link to="/"> Back to home page</Link>
        </div>
      );
    }
  }
}
