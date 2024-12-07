import React from 'react';
import { Link } from 'react-router-dom';

const MoviesCards = ({movie}) => {
    const {_id, poster, title, genre, duration, year, rating } = movie;
    const genres = genre.join(' ');


    return (
        <div className="card card-compact shadow-xl backdrop-blur-md bg-white bg-opacity-50">
        <div className='w-full h-[460px]'>
          <img
          className='w-full h-full object-cover'
            src={poster}
             alt="movie"
         />
        </div>
        <div className="card-body ">
          <h2 className="card-title font-titleFont mb-3 text-2xl">{title}</h2>
          <p className='font-paraFont'><span className='font-paraFont font-bold'>Genre:</span> {genres}</p>
          <p className='font-paraFont'><span className='font-paraFont font-bold'>Year:</span> {year}</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Duration:</span> {duration} min</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Rating:</span> {rating}</p>
          <div className="card-actions">
            <Link to={`/movieDetails/${_id}`} className="btn w-full text-xl font-titleFont mt-2">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default MoviesCards;