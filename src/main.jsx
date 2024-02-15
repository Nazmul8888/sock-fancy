import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blankets from './components/NavBar/Blankets/Blankets';
import GetFreeMockups from './components/NavBar/GetFreeMockups/GetFreeMockups';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'blanketsTowels',
        element: <Blankets></Blankets>
      },
      {
        path:'getFreeMockups',
        element:<GetFreeMockups></GetFreeMockups>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div >
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
