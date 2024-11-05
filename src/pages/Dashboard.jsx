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