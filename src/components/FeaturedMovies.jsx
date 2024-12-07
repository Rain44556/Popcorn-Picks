import { useLoaderData } from 'react-router-dom';
import FeaturedMoviesCards from '../components/FeaturedMoviesCards.jsx'
import { useEffect, useState } from 'react';
const FeaturedMovies = () => {
    // const featuredData =  useLoaderData();
    // console.log(featuredData)

    const [featuredData, setFeatureData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/movies/featured?limit=6&sort=rating')
        .then((res)=> res.json())
        .then(data => setFeatureData(data))
        .catch((err)=> console.log(err));
    }, []);

    return (

        <div className='p-10 bg-gray-900 text-white  min-h-screen'>
            <h2 className="text-2xl font-bold font-titleFont text-center mb-6">Featured Movies</h2>
            <div className="grid grid-cols-3 w-11/12 mx-auto gap-10">
            {
            featuredData.map(feature => <FeaturedMoviesCards
                key={feature._id}
                feature={feature}
                >

            </FeaturedMoviesCards>)
            }
         </div>
        </div>
    
     
    );
};

export default FeaturedMovies;