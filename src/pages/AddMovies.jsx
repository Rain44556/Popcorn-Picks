import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Rating } from 'react-simple-star-rating'
import validator from 'validator'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddMovies = () => {
    const [error, setError] = useState({});
    const [rating, setRating] = useState(0);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const genres = [
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Animated', label: 'Animated' },
        { value: 'Science-Fiction', label: 'Science-Fiction' },
        { value: 'Drama', label: 'Drama' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'Action', label: 'Action' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Horror', label: 'Horror' },
    ]

    const years = [
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' },
    ]

    const handleRating = (rate) => {
        setRating(rate);
    }

    const handleAddMovie = (e) => {
        e.preventDefault();

        const addMovieForm = e.target;
        const poster = addMovieForm.poster.value;
        const title = addMovieForm.title.value;
        const genre = [];
        Array.from(addMovieForm.genre).forEach((val)=>genre.push(val.value));
        const duration = addMovieForm.duration.value;
        const year = addMovieForm.year.value;
        const summary = addMovieForm.summary.value;

        const newMovies = { poster, title, genre, duration, year, rating, summary };


        // check all validation
        // if (!validator.isURL(poster)) {
        //     setError({...error, poster: "Must be a valid image URL"})
        //     return;
        // }

        let validationError = {};

        if (!poster.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/)) {
            validationError = { ...validationError, poster: "Must be a valid image URL" }
        }
        if (title.trim().length < 2) {
            validationError = { ...validationError, title: "Must have atleast 2 characters" }
        }
        if (!genre) {
            validationError = { ...validationError, genre: "There must be a Genre" }
        }
        if (!duration || Number(duration) <= 60) {
            validationError = { ...validationError, duration: "The duration must exceed sixty minutes" }
        }
        if (!year) {
            validationError = { ...validationError, year: "The year of release is required." }
        }
        if (rating === 0) {
            validationError = { ...validationError, rating: "Rating is required" }
        }
        if (summary.trim().length < 10) {
            validationError = { ...validationError, summary: "A minimum of ten characters must be used in the summary" }
        }
        setError(validationError);
        if(validationError && validationError.length > 0){
            return;
        }

        fetch('http://localhost:5000/movies', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...newMovies, email: user.email})
        })
            .then(res => {
                return res.json()})
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added Movie',
                        icon: 'success',
                        confirmButtonText: 'Movie Added'
                    })
                    navigate("/allMovies");
                }
            })
            .catch(err=>{
               toast.error("Failed To Add Movie")
            })
    }

    return (
        <div className="backdrop-blur-md bg-white bg-opacity-60 p-24 w-7/12 mx-auto my-20">
            <h1 className="text-[#374151] text-4xl font-titleFont text-center mb-5"> Add Movie</h1>
            <p className="font-paraFont text-[#1B1A1AB3] text-center mb-5 text-sm">Fill our movie collection with your favorite movies to make them come to life! Add the movie's title, genre, release date, and other information you wish to contribute. Regardless of whether it's a recent release or an enduring classic, your contribution aids others in finding fantastic films. Together, we can make our movie portal the go-to place for moviegoers!</p>

            <form
                onSubmit={handleAddMovie}

            >
                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text"> Movie Poster </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="url" name="poster" className="grow w-full" placeholder="Enter Movie Poster" />
                        </label>

                        {error.poster &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.poster}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text"> Movie Title</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="title" className="grow w-full" placeholder="Enter Movie Title" />
                        </label>
                        {error.title &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.title}</span>)
                        }
                    </div>
                </div>


                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text">Genre</span>
                        </label>
                        <Select
                            name='genre'
                            options={genres}
                            className='basic-multi-select'
                            isMulti
                            classNamePrefix="select"
                            placeholder="Please Select Genre"
                        ></Select>
                        {error.genre &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.genre}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text">Duration</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="duration" className="grow w-full" placeholder="Movie duration in minutes (e.g., 120)" />
                        </label>

                        {error.duration &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.duration}</span>)
                        }
                    </div>

                </div>

                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text">Release Year</span>
                        </label>

                        <Select
                            name='year'
                            options={years}
                            className='basic-single'
                            classNamePrefix="select"
                            placeholder="Please Select Year"
                        ></Select>

                        {error.year &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.year}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <Rating
                                onClick={handleRating}
                                initialValue={rating}
                                size={20}
                                fillColor="yellow"
                                emptyColor="gray"
                            ></Rating>
                        </label>

                        {
                            error.rating &&
                            (<span className='mt-2 text-red-800 font-semibold'> {error.rating}</span>)
                        }
                    </div>
                </div>


                <div className="form-control mb-7">
                    <label className="form-control">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea name="summary" className="grow rounded-2xl input input-bordered flex items-center gap-2" placeholder="Short Summary of the movie" ></textarea>

                    {error.summary &&
                        (<span className='mt-2 text-red-800 font-semibold'> {error.summary}</span>)
                    }
                </div>

                <input type="submit" value="Add Movie" className="btn btn-block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800" />
            </form>
        </div>
    );
};

export default AddMovies;