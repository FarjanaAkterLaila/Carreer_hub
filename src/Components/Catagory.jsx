import React, { useEffect, useState } from 'react';
import List from './list';

const Catagory = () => {
    const [products, setPro] = useState([])
    useEffect(() => {
        fetch("catarogray.json")
            .then((res) => res.json())
            .then((data) => setPro(data));
    }, []);


    return (
        <div className='bg-white ' style={{ textAlign: 'center' }}>
            <h1 className='pt-5'>Job Category List</h1>
            <p className='pt-0'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='row d-flex justify-content-evenly px-5'style={{marginBottom:"20px",marginTop:"30px"}}>
            
                {
                   products.map(product=><div className=' col-md-2 mb-sm-5 mb-md-0 card mx-3 border-0 fs-4 fw-bold text-start' style={{background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
                    ,borderRadius: "8px",paddingLeft:"20px"}}><img className="my-2"src={product.img}/>
                    {product.title}
                    <p className='fs-6 fw-normal my-2'>{product.readTime}  Jobs Available</p></div>)
            
           
                }
               
            </div>
       </div>

                );
};

                export default Catagory;