import { Link, useLoaderData } from 'react-router-dom';
import FeaturedMoviesCards from '../components/FeaturedMoviesCards.jsx'
import { useEffect, useState } from 'react';
import Banner from './Banner.jsx';
import TrendingMovies from './TrendingMovies.jsx';
import PartnerPromotions from './PartnerPromotions.jsx';
const FeaturedMovies = () => {
    // const featuredData =  useLoaderData();
    // console.log(featuredData)

    const [featuredData, setFeatureData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/movies/featured?limit=8&sort=rating')
        .then((res)=> res.json())
        .then(data => setFeatureData(data))
        .catch((err)=> alert(err));
    }, []);

    return (

       <div>
        <Banner></Banner>
         <div className='p-10 bg-gray-900 text-white  min-h-screen w-11/12 mx-auto'>
            <h2 className="text-4xl font-bold font-titleFont text-center mb-6">Featured Movies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-10">
            {
            featuredData.map(feature => <FeaturedMoviesCards
                key={feature._id}
                feature={feature}
                >

            </FeaturedMoviesCards>)
            }
         </div>
         {/* <Link to="/allMovies" className='btn w-full mt-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800'>All Movies</Link> */}
        </div>
        <TrendingMovies></TrendingMovies>
        <PartnerPromotions></PartnerPromotions>
       </div>
    
     
    );
};

export default FeaturedMovies;