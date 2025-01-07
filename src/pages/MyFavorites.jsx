import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import MyFavMovieCards from '../components/MyFavMovieCards';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyFavorites = () => {
    const userData = useContext(AuthContext);
    const [movieData, setMovieData] = useState([]);
    const navigate = useNavigate();

    
    useEffect(()=>{
        console.log(userData.user.email);
        fetch(`http://localhost:5000/favMovies?email=${userData.user.email}`)
        .then(res => res.json())
        .then(data =>{
            setMovieData(data);
        })
    }, []);


    const handleFavMovieDelete = (id) => {
        
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
                fetch(`http://localhost:5000/favMovies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Added movie has been deleted.",
                                icon: "success"
                            });
                            const afterDeletedMovieList = movieData.filter( movie => movie._id !== id);
                            setMovieData(afterDeletedMovieList);
                            navigate("/myFavorites");
                        }
                    })
            }
        })
    }



    return (
        <div className='w-10/12 mx-auto'>
            <h1 className=''>My Favorite Movies</h1>
            <div className='grid md:grid-cols-3 gap-10'>
            {
                movieData.map(favMovie => <MyFavMovieCards
                key={favMovie._id}
                detailsData={favMovie}
                handleFavMovieDelete={handleFavMovieDelete}
                ></MyFavMovieCards>)
            }
        </div>
        </div>
    );
};

export default MyFavorites;