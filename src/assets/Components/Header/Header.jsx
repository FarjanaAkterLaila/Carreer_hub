import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           
          <nav className="navbar navbar-light bg-light justify-content-between px-3 ">
              <h1 class="navbar-brand fw-bolder fs-2">FutureCareer</h1>

        <div className='d-flex justify-content-evenly'>
            <h6 className='px-3 fs-5'>Statistics</h6>
            <h6 className='px-3 fs-5'> Applied Jobs</h6>
           <h6 className='px-3 fs-5'> Blog</h6>
        </div>
        <button className="btn fw-bolder fs-5 text-white">Star Applying</button>
      </nav>
      
  
        </div>
    );
};

export default Header;