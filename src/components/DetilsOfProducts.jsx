import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaNs8, FaRegHeart } from "react-icons/fa";
import { addToStoreCartList } from '../utility/addToDb';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const DetilsOfProducts = () => {

    const { productsId } = useParams()
    const id = parseInt(productsId)
    const products = useLoaderData()

    const data = products.find(p => p.product_id === id)


    const handleAddCart = (id) => {
        addToStoreCartList(id)
    }


    return (
        <div>
            <div className=" shadow-2xl ">
                <div className=" flex flex-col lg:flex-row justify-center  ">
                    <div className='w-auto lg:w-6/12  lg:p-4'>
                        <img src={data.product_image} className=" w-full rounded-3xl " /></div>
                    <div className='w-auto lg:w-6/12  p-4  rounded-3xl'>
                        <h1 className="text-4xl font-bold text-start">{data.product_title}</h1>
                        <p className="py-3 text-2xl"> price : ${data.price} </p>
                        <button className='w-auto bg-green-200 p-2 rounded-lg border-green-400 border-2'>{data.availability === true ? "In Stock" : "N/A"}</button>
                        <p className="py-3 text-xl">{data.description} </p>
                        <p className=' text-2xl '>Specification</p>
                        <p>{
                            data?.Specification?.map((s, i) => <ol><li>{i + 1} . {s}</li></ol>)
                        }
                        </p>
                        <p className='text-2xl py-2 '>Ratings :</p>
                        <p className='text-2xl py-2 '>
                            <div className="rating mr-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            {data.rating}
                        </p>
                        <div className='flex gap-10 mt-5 items-center'>
                            <button onClick={() => {
                                handleAddCart(data.product_id)

                            }} className='btn'>Add to Cart</button>


                            <button className='bg-white rounded-full btn p-2'><FaRegHeart className="text-2xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default DetilsOfProducts;