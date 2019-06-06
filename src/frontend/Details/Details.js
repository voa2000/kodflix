import React from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";
import "../Details/Details.css";

export default class Details extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: "",
      title: "",
      synopsis: "",
      year: "",
      moviesData: {}
    };
  }
  componentDidMount() {
    let movieId = this.props.match.params.id;
    console.log(movieId);
    fetch("/rest/shows/")
      .then(response => response.json())
      .then(movies => {
        let moviesData = movies.find(movie => movie.id === movieId);
        this.setState({ moviesData });
      });
  }

  render() {
    let movies = this.state.moviesData;
    if (movies) {
      return movies.id ? (
        <div className="details-container">
          <div className="details-content">
            <div className="details-title">
              <h1>{this.state.moviesData.title}</h1>
            </div>
          </div>
          <div className="details-text-title">Synopsis</div>
          <div className="details-text">{this.state.moviesData.synopsis}</div>
          <div className="details-text-title">
            Year Released: {this.state.moviesData.year}
          </div>

          <div className="details-image-item">
            <img
              src={require(`../../frontend/common/images/details/${
                this.state.moviesData.id
              }.jpg`)}
              alt={this.state.moviesData.title}
            />
          </div>

          <Link className="details-back-button" to="/">
            {" "}
            Back to Gallery
          </Link>
          <p />
        </div>
      ) : (
        <Loading />
      );
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}
