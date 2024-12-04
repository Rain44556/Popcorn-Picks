import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
    const navLinks = <>
    <NavLink className="px-6" to="/">Home</NavLink>
    <NavLink className="pr-6" to="/allMovies">All Movies</NavLink>
    { user && <>
      <NavLink className="pr-6" to="/addMovie">Add Movie</NavLink>
      </>
    }
    {user && <>
      <NavLink className="pr-6" to="/myFavorites">My Favorites</NavLink>
            </>
    }
    <NavLink className="pr-6" to="/routes">routes</NavLink>
    </>

    const authLinks = <>
       { user && user?.email ?
       (<button onClick={logOutUser} className="btn bg-black hover:bg-gray-900 text-gray-200 ">Logout</button>) :
        <NavLink className="px-5 py-3" to="/auth/login">Login</NavLink>
      }
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