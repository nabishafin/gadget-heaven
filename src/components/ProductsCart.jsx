import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const ProductsCart = ({ product }) => {


    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={product.product_image}
                        alt="N/C"
                        className="rounded-xl w-auto " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{product?.product_title || 'N/C'}</h2>
                    <p className='font-bold'>Price : $ {product?.price || 'N/C'}</p>
                    <div className="card-actions">
                        <Link to={`details/${product.product_id}`}><button className='bg-[#9538E2] text-white p-2 rounded-2xl hover:bg-[#380d5b]'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default ProductsCart;