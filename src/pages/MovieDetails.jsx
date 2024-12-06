import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import Swal from 'sweetalert2';

const MovieDetails = () => {
    const detailsData = useLoaderData();
    const [deleteMovies, setDeleteMovies] = useState(detailsData)

    const { _id, poster, title, genre, duration, year, rating } = detailsData;


    const handleDelete = (id) => {
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
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Added movie has been deleted.",
                                "success"
                            );
                            const remainingMovie = deleteMovies.filter(movie => movie._id !== id);
                            setDeleteMovies(remainingMovie)
                        }
                    })
            }
        })
    }


    return (
        <div className="flex shadow-xl w-10/12 mx-auto backdrop-blur-md bg-white bg-opacity-60 ">
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
                    <button onClick={() => handleDelete(_id)} className='btn'>Delete <RiDeleteBin7Fill /></button>
                    <button className='btn'>Add to Favorite <MdOutlineFavorite />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;