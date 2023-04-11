import React from 'react';
import './Navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink';
const Navbar = () => {
    return (
        <div className='h-25'>
             <nav className="navbar navbar-light justify-content-between px-3 ">
              <h1 class="navbar-brand fw-bolder fs-2 mx-5">FutureCareer</h1>

        <div className='d-flex justify-content-evenly'>
            <ActiveLink to="/Statistics" >Statistics</ActiveLink>
            <ActiveLink to="/Applied Jobs" >Applied Jobs</ActiveLink>
            <ActiveLink to="/Blog">Blog</ActiveLink>
            
        </div>
        <button className="btn fw-bolder fs-5 text-white mx-5">Star Applying</button>
      </nav>
        </div>
    );
};

export default Navbar;