import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navOption = <>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/">DASHBOARD</Link>
        </li>
        <li>
            <Link to="/ourMenu">OUR MENU</Link>
        </li>
        <li>
            <Link to="/orderFood">ORDER FOOD</Link>
        </li>
        <li>
            <Link to="/">CONTACT US</Link>
        </li>

    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navOption
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost  normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOption
                        }
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn ">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;