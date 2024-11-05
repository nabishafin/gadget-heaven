import React from 'react';

const Header = ({ tittle, subtittle }) => {
    return (
        <div className='mb-20'>
            <h1 className='text-3xl md:text-5xl text-center font-bold '>{tittle}</h1>
            <p className='text-lg md:text-xl text-center font-bold'>{subtittle}</p>
        </div>
    );
};

export default Header;