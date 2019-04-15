import React from 'react'
import Movies from './Movies';
import getMovies from './movies-get';
export default function Gallery(props) {

  return (
      <div className="container">
        {
          getMovies().map(movie => (
            <Movies
              key={movie.id}
              movieId={movie.id}
              name={movie.name}
              logo={movie.logo}
            />
          ))
        }
      </div>
  )
}

