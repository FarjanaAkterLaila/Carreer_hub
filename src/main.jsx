import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Components/Header';
import Catagory from './Components/Catagory';
import Featured from './Components/Featured';


import Blog from './Components/Blog';
import Jobdetails from './Components/Jobdetails';
import { productsAndCartData } from './loaders/getCart&ProductsData';

import Statistics from './Components/Statistics';
import ErrorPage from './Components/ErrorPage';
import Listapp from './Components/Listapp';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Header></Header>,
        loader: ()=>fetch('jobdata.json')
        
      },
      {
        path: '/Statistics',
        element:<Statistics></Statistics>
        
      },
      {
        path:'/Listapp',
        element:<Listapp></Listapp>,
        loader: productsAndCartData
        
      },
      {
        path: '/Blog',
        element:<Blog></Blog>
        
      },
    
      {
        path: '/Jobdetail/:JobdetailId',
        element:<Jobdetails></Jobdetails>
        
      },
      
    
     
      
    ]

  },
 
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
