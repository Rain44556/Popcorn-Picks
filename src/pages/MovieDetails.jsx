import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import Swal from 'sweetalert2';

const MovieDetails = () => {
    const detailsData = useLoaderData();
    const [deleteMovies, setDeleteMovies] = useState(detailsData);
const navigate = useNavigate();


    const { _id, poster, title, genre, duration, year, rating, summary } = detailsData;
    const genres = genre.join(' ');


    const handleMovieDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Added movie has been deleted.",
                                icon: "success"
                            });
                            navigate("/allMovies");
                            const remainingMovie = deleteMovies.filter(movie => movie._id !== id);
                            setDeleteMovies(remainingMovie);
                        }
                    })
            }
        })
    }


    return (
        <div className="flex shadow-xl w-9/12 mx-auto backdrop-blur-md bg-white bg-opacity-20 ">
            <div>
                <img className='w-4/5 h-full'
                    src={poster}
                    alt="movie"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title font-titleFont mb-8 text-6xl">{title}</h2>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Genre:</span> {genres}</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Year:</span> {year}</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Duration:</span> {duration} min</p>
                <p className='font-paraFont'><span className='font-paraFont font-bold'>Rating:</span> {rating}</p>
                <p className='font-paraFont'><span className='font-bold'>Summary:</span> {summary}</p>
                <div className="card-actions">
                    <button onClick={() => handleMovieDelete(_id)} className='btn bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 border-3 border-gray-700 w-full text-2xl font-titleFont'>Delete <RiDeleteBin7Fill /></button>
                    <button className='btn w-full text-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800'>Add to Favorite <MdOutlineFavorite />
                    </button>
                    <Link to="/updatedMovie" className='btn w-full text-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800'>Update Movie <MdUpdate /></Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;