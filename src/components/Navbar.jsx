import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
    <NavLink className="px-6" to="/">Home</NavLink>
    <NavLink className="pr-6" to="/allMovies">All Movies</NavLink>
    <NavLink className="pr-6" to="/addMovie">Add Movie</NavLink>
    <NavLink className="pr-6" to="/myFavorites">My Favorites</NavLink>
    <NavLink className="pr-6" to="/routes">routes</NavLink>
    </>

    const authLinks = <>
        <NavLink className="px-5 py-3" to="/auth/login">Login</NavLink>
        <NavLink className="px-5 py-3" to="/auth/signup">Signup</NavLink>
    </>
    
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow  bg-black  font-semibold text-gray-400">
         {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">POPCORN PICKS</a>
        </div>
        <div className="navbar-center hidden lg:flex bg-black p-2 rounded-full font-semibold text-gray-400">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 font-medium">
          {authLinks}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;