import React from 'react';

const WishCart = ({ item }) => {
    return (
        <div>
            <div className='border-2 flex justify-between items-center p-3 rounded mt-2'>
                <div className='flex  gap-4'>
                    <div className="w-24 ring ring-offset-2 flex justify-center items-center">
                        <img src={item.product_image} />
                    </div>

                    <div className='flex-col lg:flex items-start '>
                        <h2 className='text-2xl font-semibold '>{item.product_title}</h2>
                        <h3 className='flex ' >{item.description}</h3>
                        <h3 className=''>Price : ${item.price}</h3>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WishCart;