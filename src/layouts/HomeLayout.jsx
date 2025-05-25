import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = {
      "/": "Home | Popcorn Picks",
      "/allMovies": "All Movies | Popcorn Picks",
      "/addMovie": "Add Movie | Popcorn Picks",
      "/myFavorites": "My Favorites | Popcorn Picks",
      "/movieDetails/:id": "Movie Details | Popcorn Picks",
      "/updatedMovie/:id": "Updated Movie | Popcorn Picks",
      "/auth/login": "Login | Popcorn Picks ",
      "/auth/signup": "Signup | Popcorn Picks ",
    };

    const currentPageTitle = pageTitle[location.pathname] || "Popcorn Picks"
    document.title = currentPageTitle;
  }, [location]);

  return (
    <div className='bg-backgroundColor '>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;