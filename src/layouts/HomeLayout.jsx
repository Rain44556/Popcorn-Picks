import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='bg-gray-900 '>
        <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;