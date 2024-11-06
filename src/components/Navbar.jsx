
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { getStoredCartList, getWishCartList } from "../utility/addToDb";

const Navbar = () => {
    const { pathname } = useLocation()

    const cart = getStoredCartList()
    const wishlist = getWishCartList()

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div>
            <div className={`navbar ${pathname === "/" ? 'bg-[#9538E2]' : 'bg-slate-100'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl font-bold ">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4  font-semibold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex items-center">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator p-1 bg-white rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{cart.length} </span>
                        </div>
                    </div>

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white p-2 rounded-full ">
                            <FaRegHeart className="" />
                            <span className="badge badge-sm indicator-item">{wishlist.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;