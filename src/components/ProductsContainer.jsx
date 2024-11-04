import React from 'react';
import ProductsCart from './ProductsCart';

const ProductsContainer = ({ products }) => {

    return (
        <div className='border-2 border-red-400 w-auto gap-2 grid grid-cols-1 lg:grid-cols-3'>
            {
                products?.map(item => <ProductsCart
                    product={item}
                    key={item.product_id} />)
            }

        </div>
    );
};

export default ProductsContainer;