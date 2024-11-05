import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductsContainer from '../components/ProductsContainer';



const Home = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')



    useEffect(() => {
        fetch('/public/public.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleProductsCategory = (value) => {
        setCategory(value)
    }

    const updatedProducts = category.length > 0 ? products.filter(p => p.category === category) : products

    return (
        <div>
            {/* Banner Coomponents */}
            <Banner></Banner>

            {/* header section */}
            <Header tittle={'Explore Cutting-Edge Gadgets'}></Header>


            <div className='flex flex-col md:flex-row lg:flex-row gap-2 '>
                <div className=' w-auto lg:w-2/12'>
                    {/* Categories Container */}
                    <Categories
                        handleProductsCategory={handleProductsCategory}
                    />
                </div>

                <div className='w-auto lg:w-10/12'>
                    {/* Products-Container */}
                    <ProductsContainer products={updatedProducts} />
                </div>
            </div>


        </div>
    );
};

export default Home;