import React from 'react';
import banner from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className=''>
            <div className=" bg-[#9538E2] min-h-[600px] rounded-b-2xl py-5 lg:py-24 ">
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="bg-white p-2 rounded-xl text-[#9538E2] font-bold btn">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='w-8/12 mx-auto z-40 bottom-16 md:bottom-32 lg:bottom-32 relative border-2 p-3 rounded-xl backdrop-blur-3xl bg-white'>
                    <img className='rounded-xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;