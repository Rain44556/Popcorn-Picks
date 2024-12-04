import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
import AllMovies from './pages/AllMovies'
import AddMovies from './pages/AddMovies'
import MyFavorites from './pages/MyFavorites'
import Home from './pages/Home'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute/PrivateRoute'


const router = createBrowserRouter([

  {
  
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/allMovies",
        element:<AllMovies></AllMovies>,
      },
      {
        path: "/addMovie",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path: "/myFavorites",
        element:<PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
      },
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
  </AuthProvider>
  </StrictMode>,
)
