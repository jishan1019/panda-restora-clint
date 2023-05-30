import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaComment } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const DrowerNavigate = () => {
    return (
        <div className="drawer drawer-mobile bg-[#F6F6F6] ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
                <ul className="menu bg-[#FF7F0E] p-4 w-80 text-base-content">
                    <li className='text-2xl font-bold mb-6'>
                        <h1>
                            Bistro Boss <br /> Restudent
                        </h1>
                    </li>

                    <li>
                        <Link to='/'>
                            <FaHome />
                            User Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <FaShoppingCart />
                            My Cart
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <FaCalendar />
                            Reservation
                        </Link>
                    </li>

                    <li>
                        <Link to='/'>
                            <FaWallet />
                            Payment History
                        </Link>
                    </li>

                    <div className="bg-white rounded-md h-[2px] divider"></div>

                    <li>
                        <Link to='/'>
                            <FaHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to='/'>
                            <GiHamburgerMenu />
                            Menu
                        </Link>
                    </li>

                    <li>
                        <Link to='/'>
                            <FaShoppingCart />
                            Shop
                        </Link>
                    </li>

                    <li>
                        <Link to='/'>
                            <FaComment />
                            Contact
                        </Link>
                    </li>

                    <div className="bg-white rounded-md h-[2px] divider"></div>
                </ul>

            </div>
        </div>
    );
};

export default DrowerNavigate;