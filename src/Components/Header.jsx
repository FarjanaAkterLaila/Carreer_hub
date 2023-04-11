import React from 'react';
import picimg from '../assets/Images/pic.png'
import Catagory from './Catagory';

const Header = () => {
    return (
        <div>
        <div className="d-flex  justify-content-between">
            <div className='w-25 h-25 mx-5'>
              <h1  style={{paddingTop:"80px",paddingLeft:"30px",
fontSize: "50px"}}>One Step Closer To Your<span style={{color:"#7E90FE"}}> Dream Job</span></h1>
<p style={{paddingTop:"10px",paddingLeft:"40px"}}>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
<button className="btn fw-bolder fs-5 text-white mx-5">Get Started</button>
</div>

              <img src={picimg} style={{paddingTop:"30px"}} className='w-50 h-25 mx-auto'/>
            
        </div>
        <div> <Catagory></Catagory></div>
       </div>
         
    );
};

export default Header;