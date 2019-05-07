import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovies from './movies-get';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }
  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovies()
      .find((movie) => movie.id === movieId);
    this.setState({ movie });
  }
  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='App'>
          <div className='details-title'>
              <h1>{this.state.movie.title}</h1>
          </div>
          <div className='details-container'>
        
            <div className="details-text-item">
              <p>{this.state.movie.synoposis} </p>
            </div>
            <div className="details-image-item">
              <img
                src={this.state.movie.logo}
                alt={this.state.movie.title}
              />
            </div>
          </div>
          <Link to='/'> Back to home page</Link>
        </div>
      );
    }
  }
}