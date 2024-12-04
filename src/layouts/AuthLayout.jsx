import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div>
             <nav className="w-11/12 mx-auto py-8"><Navbar></Navbar></nav>
             <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;