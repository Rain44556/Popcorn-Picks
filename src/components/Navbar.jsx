import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const  Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
    const navLinks = <>
    <NavLink className="px-6" to="/">Home</NavLink>
    <NavLink className="px-6" to="/allMovies">All Movies</NavLink>
    { user && <>
      <NavLink className="px-6" to="/addMovie">Add Movie</NavLink>
      </>
    }
    {user && <>
      <NavLink className="px-6" to="/myFavorites">My Favorites</NavLink>
            </>
    }
    <NavLink className="px-6" to="/about">About</NavLink>
    </>

    
    return (
        <div className="navbar w-11/12 mx-auto sticky top-0 z-50 backdrop-blur-md shadow-xl bg-gray-800/50 ">
        <div className="navbar-start">
          <div className="dropdown  bg-yellow-400">
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
          <Link to="/"><img 
          className='w-20 rounded-full shadow-lg'
          src="https://i.ibb.co.com/Y0YWhdZ/loggo-removebg-preview.png" 
          alt="logo" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-black p-2 rounded-full font-semibold text-gray-400">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 font-medium">

        { user && user?.email ?
       (<div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-6 shadow bg-gray-100">
          <li>
            <a className="justify-between p-2 mb-2">
              {user?.displayName}
            </a>
          </li>
          <button onClick={logOutUser} className="btn rounded-md bg-yellow-400 hover:bg-gray-900 text-gray-200 ">Logout</button>
        </ul>
      </div>) :
        <Link className="px-5 py-3 bg-yellow-400 mx-4 rounded-md" to="/auth/login">Login</Link>
      }
        <Link className="px-5 py-3 bg-yellow-400 ml-4 rounded-md" to="/auth/signup">Signup</Link>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;