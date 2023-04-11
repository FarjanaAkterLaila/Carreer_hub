import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Catagory from './Components/Catagory'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
    <Navbar></Navbar>

    <Outlet></Outlet>
   
           
    
    </div>
  )
}

export default App
