import React, { useState } from 'react';
import picimg from '../assets/Images/pic.png'
import Catagory from './Catagory';
import Featured from './Featured';
import { useLoaderData } from 'react-router-dom';


const Header = () => {
    const [visidle,setvisible]=useState(4);
    const [showButton ,setbutton]=useState(true);
    const jobdata = useLoaderData()
    //console.log(jobdata);
    const [bl, setBlog] = useState([])
    const showMore=()=>{
        setvisible(6)
        setbutton(false);
    }
const handleShowDetails = (id)=>{
    const newBlog = [...bl, id];
    setBlog(newBlog);
}
console.log(bl);
    return (
        <div>
            <div className="d-flex col-md-12 justify-content-sm-between bg-light">
                <div className='w-25 h-25 mx-5 mx-md-5'>
                    <h1 style={{
                        paddingTop: "80px", paddingLeft: "30px",
                        fontSize: "50px"
                    }}>One Step Closer To Your<span style={{ color: "#7E90FE" }}> Dream Job</span></h1>
                    <p style={{ paddingTop: "10px", paddingLeft: "40px" }}>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btnwe  fw-bolder fs-5 text-white mx-5">Get Started</button>
                </div>

                <img src={picimg} style={{ paddingTop: "30px" }} className='w-50 h-25 mx-auto' />

            </div>
            <div > <Catagory></Catagory></div>
            <div className='bg-white' style={{ textAlign: 'center' }}>
                <div>
                    <h1 className='pt-5'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='row row-gap-3 grid px-5 mx-5 pt-3'>
                        {
                            jobdata.slice(0,visidle).map(job => (<Featured
                                key={job.id}
                                job={job} 
                                handleShowDetails={handleShowDetails}/>)
                            )

                            // <p className='col-md-1 col-lg-6' key={job.id}>{job.job_title}</p>
                        }
                         {
                            showButton && <button onClick={showMore} className="btnwe  fw-bolder fs-5 text-white w-25 ms-auto me-auto mx-5">See More</button>}
                    </div>
                </div>
            </div>




        </div>

    );
};

export default Header;