import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/Header';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from '../utility/addToDb';
import ProductCart from '../components/ProductCart';
import { AiFillCarryOut } from "react-icons/ai";



import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Dashboard = () => {

    const products = useLoaderData()

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        const cartItem = getStoredCartList()
        const cartItemInt = cartItem.map(id => parseInt(id))
        const cartProducts = products.filter(item => cartItemInt.includes(item.product_id))
        setCartProducts(cartProducts)
    }, [])


    const handleSortBtn = () => {
        const updateSortList = [...cartProducts].sort((a, b) => b.price - a.price);
        setCartProducts(updateSortList)
    }

    const totalBalance = cartProducts.reduce((a, b) => {
        return a + b.price;
    }, 0);


    // modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


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
                                <p className='text-xl lg:text-2xl font-bold hidden md:block'>  Total Cost : {totalBalance}</p>
                                <button onClick={() => handleSortBtn()} className='bg-emerald-400 p-2 rounded-xl hover:bg-emerald-700 '>Short By Price</button>
                                <button onClick={openModal} className='bg-emerald-400 p-2 rounded-xl hover:bg-emerald-700 '>Purchase</button>
                            </div>
                        </div>
                        {
                            cartProducts.map(p => <ProductCart
                                item={p}
                                key={p.product_id}
                            />)
                        }
                        <div>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-4xl text-emerald-400'><AiFillCarryOut /></h1>
                                    <h2 className='text-2xl font-bold'>Paymet SucessFully</h2>
                                    <p className='py-2 text-xl'>Thanks for purchasing</p>
                                    <p className='py-2 text-xl'>Total:{totalBalance}</p>
                                    <div>
                                        <button className='p-2 bg-emerald-400 rounded-2xl ' onClick={closeModal}>close</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
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