import React from 'react';

const MoviesCards = ({movie}) => {
    const { poster, title, genre, duration, year, rating, summary } = movie;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={poster}
         />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{genre}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default MoviesCards;