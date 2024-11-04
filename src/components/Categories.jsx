import React, { useState } from 'react';

const Categories = ({ handleProductsCategory }) => {

    const [active, setactive] = useState('allproducts')

    const handleActive = (prop) => {
        setactive(prop)
    }


    return (
        <div className=' flex flex-col gap-3 '>
            {/* btn-1 */}
            <button onClick={
                () => {
                    handleActive('allproducts')
                    handleProductsCategory('')
                }
            } className={`bg-slate-100 p-2 rounded-lg ${active === "allproducts" ? 'text-[#9538E2]' : ''} `}>All Products</button>

            {/* btn-2 */}
            <button onClick={
                () => {
                    handleActive('laptop')
                    handleProductsCategory('laptops')
                }
            } className={`bg-slate-100 p-2 rounded-lg ${active === "laptop" ? 'text-[#9538E2]' : ''} `}>Laptops</button>

            {/* btn-3 */}
            <button onClick={
                () => {
                    handleActive('phones')
                    handleProductsCategory('phones')
                }
            } className={`bg-slate-100 p-2 rounded-lg ${active === "phones" ? 'text-[#9538E2]' : ''} `}>Phones</button>

            {/* btn-4 */}
            <button onClick={
                () => {
                    handleActive('watches')
                    handleProductsCategory('watches')
                }
            } className={`bg-slate-100 p-2 rounded-lg ${active === "watches" ? 'text-[#9538E2]' : ''} `}>watches</button>
        </div >
    );
};

export default Categories;