import React from 'react';

const Featured = ({job}) => {
    console.log(job.id)
    // const { name, picture, price, category } = job
    return (
      <div className='col-md-1 col-lg-4 mx-2 card border-1 my-5 text-start'>
        <img className='w-50 h-25'
         
          src={job.company_logo}
          alt=''
        />
        <p>{job.job_title}</p>
        <p>{job.company_name}</p>
        <p>{job.location} </p>
        <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
        
      </div>
    )
};

export default Featured;