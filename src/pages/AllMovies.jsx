import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MoviesCards from '../components/MoviesCards';

const AllMovies = () => {

    const moviesData = useLoaderData();

    return (
        <div>
            <h2 className="card-title">Movies! {moviesData.length}</h2>
            {
                moviesData.map(movie => <MoviesCards
                key={movie._id}
                movie={movie}
                >
                </MoviesCards>)
            }
        </div>
      
    );
};

export default AllMovies;