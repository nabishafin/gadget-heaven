import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductsContainer from '../components/ProductsContainer';

const Home = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch('')

    // }, [])




    // const handleCategoriesClick = (category)

    return (
        <div>
            {/* Banner Coomponents */}
            <Banner></Banner>
            <Header tittle={'Explore Cutting-Edge Gadgets'}></Header>
            <div className='flex flex-col md:flex-row lg:flex-row'>
                <Categories />
                <ProductsContainer />
            </div>
        </div>
    );
};

export default Home;