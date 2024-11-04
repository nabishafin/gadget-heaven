import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductsContainer from '../components/ProductsContainer';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/public/public.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])






    return (
        <div>
            {/* Banner Coomponents */}
            <Banner></Banner>

            <Header tittle={'Explore Cutting-Edge Gadgets'}></Header>
            <div className='flex flex-col md:flex-row lg:flex-row'>

                {/* Categories Section */}
                <Categories />

                {/* allproducts */}
                <ProductsContainer products={products} />
            </div>
        </div>
    );
};

export default Home;