import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import FeaturedMovies from '../components/FeaturedMovies';

const HomeLayout = () => {
    return (
        <div className='bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 h-screen'>
            <nav className="w-11/12 mx-auto py-8"><Navbar></Navbar></nav>
            <FeaturedMovies></FeaturedMovies>
          <main><Outlet></Outlet></main>
            
        </div>
    );
};

export default HomeLayout;