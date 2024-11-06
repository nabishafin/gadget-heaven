import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../components/Header';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getStoredCartList, getWishCartList, removeCart } from '../utility/addToDb';
import ProductCart from '../components/ProductCart';
import { AiFillCarryOut } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import WishCart from '../components/WishCart';
import p from '../assets/Group.png'



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

    const handleDeleted = (id) => {
        removeCart(id)
        const cartItem = getStoredCartList()
        const cartItemInt = cartItem.map(id => parseInt(id))
        const cartProducts = products.filter(item => cartItemInt.includes(item.product_id))
        setCartProducts(cartProducts)
    }


    const products = useLoaderData()

    const [cartProducts, setCartProducts] = useState([])

    const [wishList, setWishlist] = useState([])

    useEffect(() => {
        const cartItem = getStoredCartList()

        const cartItemInt = cartItem.map(id => parseInt(id))
        const cartProducts = products.filter(item => cartItemInt.includes(item.product_id))
        setCartProducts(cartProducts)
    }, [])

    useEffect(() => {
        const cartItem = getWishCartList()
        console.log(cartItem)
        const cartItemInt = cartItem.map(id => parseInt(id))
        const cartProducts = products.filter(item => cartItemInt.includes(item.product_id))
        setWishlist(cartProducts)
    }, [])


    // sort
    const handleSortBtn = () => {
        const updateSortList = [...cartProducts].sort((a, b) => b.price - a.price);
        setCartProducts(updateSortList)
    }

    // totalBAlence
    const totalBalance = cartProducts.reduce((a, b) => {
        return a + b.price;
    }, 0);


    // modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        toast('Paymet SucessFully')
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
                                <button onClick={openModal} className='bg-purple-400 p-2 rounded-xl hover:bg-purple-700 '>Purchase</button>
                            </div>
                        </div>
                        {
                            cartProducts.map(p => <ProductCart
                                item={p}
                                key={p.product_id}
                                handleDeleted={handleDeleted}
                            />)
                        }
                        <div className='p-4'>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className='text-4xl text-emerald-400 py-3'><img src={p} alt="" /> </h1>
                                    <h2 className='text-2xl font-bold'>Paymet SucessFully</h2>
                                    <p className='py-2 text-xl'>Thanks for purchasing</p>
                                    <p className='py-2 text-xl'>Total:{totalBalance}</p>
                                    <div>
                                        <a href="/">  <button className='p-2 bg-emerald-400 rounded-2xl ' onClick={closeModal}>close</button></a>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {
                            wishList.map(w => <WishCart
                                item={w}
                                key={w.product_id}
                            />
                            )
                        }

                    </TabPanel>
                </Tabs>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;