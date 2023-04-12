import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbars from './Components/Navbar/Navbars'
import { Outlet } from 'react-router-dom'
import Catagory from './Components/Catagory'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
    <Navbars></Navbars>

    <Outlet></Outlet>
   
           
    
    </div>
  )
}

export default App
