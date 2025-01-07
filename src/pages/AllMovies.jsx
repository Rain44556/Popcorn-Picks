import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MoviesCards from '../components/MoviesCards';

const AllMovies = () => {
    const movieList = useLoaderData();
    const [moviesData, setMovieData] = useState(movieList)

    const searchMovie = (e) => {
        e.preventDefault();

        const form = e.target.value;
        const filteredMovie = [];
        
            movieList.forEach(movie => {
                // console.log( movie.title.toLowerCase().indexOf(form));
               if( movie.title.toLowerCase().indexOf(form) !== -1){
                filteredMovie.push(movie);
               }
            }
        );

       setMovieData(filteredMovie);

    }

    return (
        <div className='w-10/12  mx-auto'>
            <div className="form-control mb-5">
                <input onChange={searchMovie} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
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