import React from 'react';

const Header = ({ tittle }) => {
    return (
        <div className='mb-20'>
            <h1 className='text-3xl md:text-5xl text-center font-bold '>{tittle}</h1>
        </div>
    );
};

export default Header;