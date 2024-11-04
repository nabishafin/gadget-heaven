import React from 'react';

const Categories = () => {
    return (
        <div className='border-2 w-auto lg:w-3/12 flex flex-col justify-center items-center gap-4 p-4'>
            <button className='btn w-full'>All Products</button>
            <button className='btn w-full'>Laptops</button>
            <button className='btn w-full'>Phones</button>
            <button className='btn w-full'>watches</button>
        </div>
    );
};

export default Categories;