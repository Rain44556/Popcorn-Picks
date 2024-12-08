import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import MyFavMovieCards from '../components/MyFavMovieCards';

const MyFavorites = () => {
    const userData = useContext(AuthContext);
    const [movieData, setMovieData] = useState([]);
    useEffect(()=>{
        console.log(userData.user.email);
        fetch(`http://localhost:5000/favMovies?email=${userData.user.email}`)
        .then(res => res.json())
        .then(data =>{
            setMovieData(data);
        })
    }, []);



    return (
        <div className='w-10/12 mx-auto'>
            <h1 className=''>My Favorite Movies</h1>
            <div className='grid md:grid-cols-3 gap-10'>
            {
                movieData.map(favMovie => <MyFavMovieCards
                key={favMovie._id}
                detailsData={favMovie}
                ></MyFavMovieCards>)
            }
        </div>
        </div>
    );
};

export default MyFavorites;