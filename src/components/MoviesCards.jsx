import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCards = ({movie}) => {
    const {_id, poster, title, genre, duration, year, rating } = movie;


    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
          className='w-3/5'
            src={poster}
             alt="movie"
         />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{genre}</p>
          <div className="card-actions">
            <Link to={`/movieDetails/${_id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default MoviesCards;