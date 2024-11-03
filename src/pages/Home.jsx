import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            {/* Banner Coomponents */}
            <Banner></Banner>
            <Header tittle={'Explore Cutting-Edge Gadgets'}></Header>

        </div>
    );
};

export default Home;