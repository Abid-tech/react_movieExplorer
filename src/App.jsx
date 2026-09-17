import { useState } from 'react'
import Home from './pages/home'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './component/navbar'
import Footer from './component/footer'
import MainLayout from './layouts/MainLayout'
import MovieListing from './pages/movieListing'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:'/movie-listing',
        element: <MovieListing/>,
      },
    ],
  },
]);

function Router() {

  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default Router
