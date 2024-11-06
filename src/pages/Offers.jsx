import React from 'react';
import ok from '../assets/ok.jpeg'
import picTwo from '../assets/OnePlus 9.jpg'
import picTHree from '../assets/Pixel 6.webp'

const Offers = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Exclusive Offers</h2>
                    <p className="mt-4 text-lg text-gray-600">Discover the best deals and discounts on your favorite gadgets!</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs w-full">
                        <img src={ok} alt="Offer 1" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">50% Off on Smart Laptop. Limited Offer</h3>
                            <p className="mt-4 text-gray-600">Get your hands on the latest smart watches at half the price!</p>
                            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Shop Now</button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs w-full">
                        <img src={picTwo} alt="Offer 2" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Buy One, Get One Free on Bluetooth Speakers</h3>
                            <p className="mt-4 text-gray-600">Perfect sound quality at an unbeatable price. </p>
                            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Shop Now</button>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg max-w-xs w-full">
                        <img src={picTHree} alt="Offer 3" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Save 30% on this Mobile</h3>
                            <p className="mt-4 text-gray-600">Upgrade your tech with top-rated laptops at an incredible price.</p>
                            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Shop Now</button>
                        </div>
                    </div>

                    {/* You can add more offer cards here as needed */}
                </div>
            </section>
        </div>
    );
};

export default Offers;