import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MoviesCards from '../components/MoviesCards';

const AllMovies = () => {
    const moviesData = useLoaderData();
    
    return (
        <div className='w-10/12  mx-auto'>
           <div className='grid md:grid-cols-3 gap-14'>
           {
                moviesData.map(movie => <MoviesCards
                key={movie._id}
                movie={movie}
                >
                </MoviesCards>)
            }
           </div>
        </div>
      
    );
};

export default AllMovies;