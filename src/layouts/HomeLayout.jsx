import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='bg-gray-900 '>
            <nav className="w-11/12 mx-auto "><Navbar></Navbar></nav>
          <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;