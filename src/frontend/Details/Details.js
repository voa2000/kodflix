import React from "react";
import { Link, Redirect } from "react-router-dom";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      synopsis: "",
      moviesData: []
    };
  }
  componentDidMount() {
    let movieId = this.props.match.params.id;
    fetch("/rest/shows/")
      .then(res => res.json())
      .then(movies => {
        let moviesData = movies.find(movie => movie.id === movieId);
        this.setState({ moviesData });
      });
  }
  render() {
    let movieId = this.props.match.params.id;

    let { title, synopsis, year } = this.state.moviesData;
    if (movieId) {
      return (
        <div className="App">
          <div className="details-title">
            <h1>{title}</h1>
          </div>
          <div className="details-container">
            <div className="details-text-item">
              <center>
                <strong>
                  <em>Synopsis</em>
                </strong>
              </center>
              <p>{synopsis}</p>
              <strong>
                <em>Year Released</em>{" "}
              </strong>
              : {year}
            </div>
            <div className="details-image-item">
              <img
                src={require(`../../frontend/common/images/details/${movieId}.jpg`)}
                alt={title}
              />
            </div>
          </div>
          <Link to="/"> Back to home page</Link>
          <p />
        </div>
      );
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}
