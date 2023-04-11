import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dollarpic from '../assets/Icons/Frame.png'
import titlepic from '../assets/Icons/Frame-1.png'
import phone from '../assets/Icons/Frame-2.png'
import email from '../assets/Icons/Frame-3.png'
import address from '../assets/Icons/Frame-4.png'
const Jobdetails = () => {
    const JobdetailId = useParams();
    let Jobdetail = {};
    const [job, setjob] = useState([]);
    useEffect(() => {
        fetch('/public/jobdata.json')
            .then(res => res.json())
            .then(data => setjob(data))
    }, []);
    for (const jobid of job) {
        if (jobid.id == parseInt(JobdetailId.JobdetailId)) {
            Jobdetail = jobid
        }
    }
    // console.log(Jobdetail);
    return (
        <div>
            <h1 className='bg-light py-5' style={{ textAlign: 'center' }}>Job Detail Page</h1>
            <div className='row mt-5'>

                <div className='col-md-6 mx-5 '>
                    <p className='fs-4 fw-bold'>Job Description:  <span className='fs-5 fw-normal'>{Jobdetail.job_description}</span></p>
                    <p className='fs-4 fw-bold'>Job Responsibility:  <span className='fs-5 fw-normal'>{Jobdetail.job_responsibility}</span></p>
                    <p className='fs-4 fw-bold'>Educational Requirements: <p className='fs-5 fw-normal'>{Jobdetail.educational_requirements}</p></p>
                    <p className='fs-4 fw-bold'>Experiences: <p className='fs-5 fw-normal'>{Jobdetail.experiences}</p></p>
                </div>

                <div className="sideCart col-md-4">
                    <div className='card border-1' style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)",
borderRadius: "8px"}}>
                        <p className='border-bottom p-2'>Job Details</p>

                        <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={dollarpic} alt="" /><p class="card-text fs-6 pt-2">Salary : {Jobdetail.salary} </p>
                        </div>
                        <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={titlepic} alt="" /><p class="card-text fs-6 pt-2">Job title : {Jobdetail.job_title} </p>
                        </div>
                        <p className='mt-3 p-2 border-bottom'>Contact Information</p>
                        <div className='d-flex mx-5'>
                            <img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={phone} alt="" />
                            <p class="card-text fs-6 pt-2">Phone : {Jobdetail.phone} </p>
                        </div>
                        <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={email} alt="" /><p class="card-text fs-6 pt-2">Email : {Jobdetail.email} </p>
                        </div>
                        <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={address} alt="" /><p class="card-text fs-6 pt-2">Address : {Jobdetail.location} </p>
                        </div>
                       </div>
                       <button className="btnwe my-5 col-md-12 align-items-center fw-bolder fs-5 text-white">Apply Now</button>
                </div>

            </div>


        </div>
    );
};

export default Jobdetails;