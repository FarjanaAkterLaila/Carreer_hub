import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Appitems from './Appitems';

const Listapp = () => {
    const {initialCart , products } = useLoaderData();

    const[item ,setItems]=useState(initialCart);
    console.log(item);
    const filterItem=(remoteoron)=>{
const updateiteams = initialCart.filter((curElem)=>{
    return curElem.remote_or_onsite === remoteoron;
});
setItems(updateiteams)
    }
    console.log(initialCart);
    return (
        <div>
            <h1 className='bg-light text-center pb-5'>Applied Job Item</h1>
             <div className='shop-container'>
             <div className='d-grid gap-2 d-md-flex justify-content-md-end' >
             
          <button  class="  btnwe dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
            Filter By
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" onClick={()=>filterItem('Remote')}>Remote</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>filterItem('Onsite')}>On-site</a></li>
          </ul>

              </div>
            <div className='review-container '>
                {
                    item.map(product => <Appitems
                        key={product.id}
                        product={product}
                        // handleRemoveFromCart={handleRemoveFromCart}
                    ></Appitems>)
                }
            </div>
        </div> 
        </div>
    );
};

export default Listapp;