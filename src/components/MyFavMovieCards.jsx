import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';


const MyFavMovieCards = ({detailsData,handleFavMovieDelete}) => {

    const { _id, poster, title, genre, duration, year, rating } = detailsData;
    const genres = genre.join(' ');



    return (
        <div className="card card-compact shadow-xl backdrop-blur-md bg-gray-600 bg-opacity-50">
        <div className='w-full h-[460px]'>
          <img
          className='w-full h-full object-cover p-5 rounded-3xl'
            src={poster}
             alt="movie"
         />
        </div>
        <div className="card-body text-[#939fb1]">
          <h2 className="card-title font-titleFont mb-3 text-2xl">{title}</h2>
          <p className='font-paraFont'><span className='font-paraFont font-bold'>Genre:</span> {genres}</p>
          <p className='font-paraFont'><span className='font-paraFont font-bold'>Year:</span> {year}</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Duration:</span> {duration} min</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Rating:</span> {rating}</p>
          <div className="card-actions">
          <button onClick={() => handleFavMovieDelete(_id)} className='btn bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 border-3 border-gray-700 w-full text-2xl font-titleFont'>Delete <RiDeleteBin7Fill /></button></div>
        </div>
      </div>
    );
};

export default MyFavMovieCards;