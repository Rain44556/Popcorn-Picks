import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MoviesCards from '../components/MoviesCards';

const AllMovies = () => {
    const moviesData = useLoaderData();
    
    return (
        <div>
             <h1 className='text-4xl my-12 text-center '>All Movies {moviesData.length}</h1>
           <div className='grid md:grid-cols-3 gap-8 p-10'>
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