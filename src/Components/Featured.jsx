import React from 'react';
import locapic from '../assets/Icons/Location Icon.png'
import dollarpic from '../assets/Icons/Frame.png'
import { Link, useNavigate } from 'react-router-dom';
const Featured = ({ job , handleShowDetails }) => {
  const navigate = useNavigate()
  // slice(0, 4)
  // //console.log(job.id)
   const {id} = job
  return (
    <div class="col-sm-5">
      <div class="card rounded-4">
        <div class="card-body text-start">
          <img className='w-50' style={{ height: "100px" }} src={job.company_logo}
            alt=''
          />
          <h5 class="card-title mt-3">{job.job_title}</h5>
          <p class="card-text">{job.company_name}</p>
          <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-outline-primary" type="button">{job.remote_or_onsite}</button>
            <button class="btn btn-outline-primary mx-3" type="button">{job.fulltime_or_parttime}</button>
          </div>
          <div className='d-flex'>
            <div className='d-flex'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={locapic} alt="" /><p class="card-text fs-6 pt-2">{job.location} </p>
            </div>
            <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={dollarpic} alt="" /><p class="card-text fs-6 pt-2">Salary : {job.salary} </p>
            </div>
          </div>
          <button onClick={()=>navigate(`Jobdetail/${id}`)} className="btnwe fw-bolder fs-5 text-white mt-3">View Details
          </button>
        </div>
      </div>
    </div>

  )
};

export default Featured;