import React from 'react'
import Movies from './Movies';
import getMovies from './movies-get';
export default function Gallery(props) {

  return (
      <div className="container">
        {
          getMovies().map(({ id, title, logo }) => (
            <Movies
              key={id}
              movieId={id}
              title={title}
              logo={logo}
            />
          ))
        }
      </div>
  )
}

