import React from 'react';
import locapic from '../assets/Icons/Location Icon.png'
import dollarpic from '../assets/Icons/Frame.png'
import { Link, useNavigate } from 'react-router-dom';
const Appitems = ({ product }) => {
    const navigate = useNavigate()
    const { id, job_title, company_logo, company_name, remote_or_onsite, fulltime_or_parttime, salary, location } = product;
    return (
        <div className='review-item mx-auto border rounded-3 mb-3 mt-5 d-flex w-75' style={{ height: "150px" }}>
            <img className='m-4' style={{
                width: "100px",
                height: " 100px",
                borderRadius: " 6px"
            }} src={company_logo} alt="" />
            <div className='review-details'>
                <h5 class="card-title mt-3">{job_title}</h5>
                <p class="card-text">{company_name}</p>
                <div class="d-grid gap-2 d-md-block">
                    <button class="btn btn-outline-primary" type="button">{remote_or_onsite}</button>
                    <button class="btn btn-outline-primary mx-3" type="button">{fulltime_or_parttime}</button>
                </div>
                <div className='d-flex'>
                    <div className='d-flex'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={locapic} alt="" /><p class="card-text fs-6 pt-2">{location} </p>
                    </div>
                    <div className='d-flex mx-5'><img style={{ width: "20px", height: "20px", marginTop: "7px", marginRight: "5px" }} src={dollarpic} alt="" /><p class="card-text fs-6 pt-2">Salary : {salary} </p>
                    </div>
                </div>

            </div>

            <button onClick={() => navigate(`/Jobdetail/${id}`)} className="btnwe ms-auto  fw-bolder fs-5 text-white my-5 mx-3">View Details
            </button>
        </div>

    );
};

export default Appitems;