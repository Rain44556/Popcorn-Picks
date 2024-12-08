import React, { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Rating } from 'react-simple-star-rating'
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdatedMovie = () => {
    const updatedMovieData = useLoaderData();
    const { _id, poster, title, genre, duration, year, rating, summary } = updatedMovieData;


    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [updatedRating, setUpdatedRating] = useState(rating);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const genres = [
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Animation', label: 'Animation' },
        { value: 'Science-Fiction', label: 'Science-Fiction' },
        { value: 'Drama', label: 'Drama' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'Action', label: 'Action' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Horror', label: 'Horror' },
    ]
    // const genre = [];
    // Array.from(genres).forEach((val)=>genre.push(val.value));
    const defaultGenre= genre.map(gen => genres[gen]);

    const years = [
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' },
    ]

    const handleRating = (rate) => {
        setUpdatedRating(rate);
    }

    const handleUpdateMovie = (data) => {
        // console.log(data);
        const newMovies = { ...data, rating:updatedRating};

        fetch(`http://localhost:5000/movies/${_id}`,{
            method: 'PUT',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(...newMovies, user.email)
          })
          .then(res=> res.json())
          .then(data => {
            // console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated Coffee',
                    icon: 'success',
                    confirmButtonText: 'Coffee Added'
                })
                navigate("/allMovies");
            }
          })

    }


    return (
        <div className="backdrop-blur-md bg-gray-600 bg-opacity-60 p-24 w-7/12 mx-auto my-20">
            <h1 className="text-[#939fb1] text-4xl font-titleFont text-center mb-5"> Update Movie</h1>
            <p className="font-paraFont text-gray-300 text-center mb-5 text-sm">Fill our movie collection with your favorite movies to make them come to life! Add the movie's title, genre, release date, and other information you wish to contribute. Regardless of whether it's a recent release or an enduring classic, your contribution aids others in finding fantastic films. Together, we can make our movie portal the go-to place for moviegoers!</p>

            <form
                onSubmit={handleSubmit(handleUpdateMovie)}
            >
                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg"> Movie Poster </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                {...register("poster",
                                    {
                                        required: "Movie poster is required",
                                        pattern: {
                                            value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/,
                                            message: "Must be a valid image URL",
                                        },
                                    })}
                                className="grow w-full"
                                defaultValue={poster} />
                        </label>

                        {errors.poster &&
                            (<span className='mt-2 text-red-600 font-semibold'> {errors.poster.message}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg"> Movie Title</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                {...register("title",
                                    {
                                        required: "Movie title is required",
                                        minLength: {
                                            value: 2,
                                            message: "Must have atleast 2 characters"
                                        },
                                    })}
                                className="grow w-full"
                                defaultValue={title} />
                        </label>
                        {errors.title &&
                            (<span className='mt-2 text-red-600 font-semibold'> {errors.title.message}</span>)
                        }
                    </div>
                </div>


                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg">Genre</span>
                        </label>
                        <Controller
                            name='genre'
                            control={control}
                            rules={{ required: "Genre is required" }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={genres}
                                    className='basic-multi-select'
                                    isMulti
                                    defaultValue={defaultGenre}
                                ></Select>
                            )}
                        >
                        </Controller>

                        {errors.genre &&
                            (<span className='mt-2 text-red-600 font-semibold'> {errors.genre.message}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg">Duration</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                {...register("duration",
                                    {
                                        required: "Duration is required",
                                        validate: (value) => value > 60 || "Duration must exceed 60 minutes",
                                    })}
                                type='number'
                                className="grow w-full"
                                defaultValue={duration} />
                        </label>

                        {errors.duration &&
                            (<span className='mt-2 text-red-600 font-semibold'> {errors.duration.message}</span>)
                        }
                    </div>

                </div>

                <div className="md:flex gap-4 mb-7">
                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg">Release Year</span>
                        </label>
                        <Controller
                            name='year'
                            control={control}
                            rules={{ required: "Release year is required" }}
                            render={({ field }) =>

                                <Select
                                    {...field}
                                    options={years}
                                    defaultValue={year}
                                    ></Select>}
                        >
                        </Controller>
                        {errors.year &&
                            (<span className='mt-2 text-red-600 font-semibold'> {errors.year}</span>)
                        }
                    </div>

                    <div className="form-control w-1/2">
                        <label className="form-control">
                            <span className="label-text text-[#939fb1] font-bold mb-3 text-lg">Rating</span>
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

                        {updatedRating === 0 &&
                            (<span className='mt-2 text-red-600 font-semibold'> Rating is required</span>)
                        }
                    </div>
                </div>


                <div className="form-control mb-7">
                    <label className="form-control">
                        <span className="label-text text-[#939fb1] font-bold mb-3 text-lg">Summary</span>
                    </label>
                    <textarea name="summary"
                        {...register("summary",
                            {
                                required: "Summary is required",
                                minLength: {
                                    value: 10,
                                    message: "Summary must have at least 10 characters",
                                }
                            })}
                        placeholder="Short summary of the movie"
                        className="grow rounded-2xl input input-bordered flex items-center gap-2 h-32"
                        defaultValue={summary}></textarea>

                    {errors.summary &&
                        (<span className='mt-2 text-red-600 font-semibold'> {errors.summary.message}</span>)
                    }
                </div>

                <input type="submit" value="Update Movie" className="btn btn-block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800" />
            </form>
        </div>
    );
};

export default UpdatedMovie;