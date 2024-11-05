import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/Header';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from '../utility/addToDb';
import ProductCart from '../components/ProductCart';

const Dashboard = () => {

    const products = useLoaderData()

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        const cartItem = getStoredCartList()
        const cartItemInt = cartItem.map(id => parseInt(id))
        const cartProducts = products.filter(item => cartItemInt.includes(item.product_id))
        setCartProducts(cartProducts)
    }, [])





    return (
        <div>
            <div className='mt-5'>
                <Header
                    tittle={'DashBord'}
                    subtittle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                ></Header>
            </div>
            <div className='text-center'>
                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl lg:text-3xl font-bold'>Cart </h1>
                            <div className='flex gap-5 items-center'>
                                <p className='text-xl lg:text-2xl font-bold hidden md:block'>  Total Cost : {0}</p>
                                <button className='bg-emerald-400 p-2 rounded-xl hover:bg-emerald-700 '>Short By Price</button>
                                <button className='bg-emerald-400 p-2 rounded-xl hover:bg-emerald-700 '>Purchase</button>
                            </div>
                        </div>
                        {
                            cartProducts.map(p => <ProductCart
                                item={p}
                                key={p.product_id}
                            />)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>



        </div>
    );
};

export default Dashboard;