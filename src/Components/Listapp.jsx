import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Appitems from './Appitems';

const Listapp = () => {
    const {initialCart , products } = useLoaderData()
    //console.log(appdata)
    
    console.log(initialCart);
    return (
        <div>
            <h1 className='bg-light text-center pb-5'>Applied Job Item</h1>
             <div className='shop-container'>
            <div className='review-container '>
                {
                    initialCart.map(product => <Appitems
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