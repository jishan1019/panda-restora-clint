import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../CustomHooks/useCart';


const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();

    const handelLogout = () => {
        logout()
            .then(() => {
            })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li>
            <Link to="/">HOME</Link>
        </li>
        {
            user && <li>
                <Link to="/dashboard/myCart">DASHBOARD</Link>
            </li>
        }
        <li>
            <Link to="/ourMenu">OUR MENU</Link>
        </li>
        <li>
            <Link to="/orderFood">ORDER FOOD</Link>
        </li>
        <li>
            <Link to="/">CONTACT US</Link>
        </li>
        <li>
            <Link to='/dashboard/myCart'>
                <button className="btn gap-1 btn-outline border-none">
                    <FaShoppingCart className='text-white h-5 w-5' />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
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

                    {
                        user ?
                            <div className='flex justify-center items-center space-x-3'>
                                <img className='h-12 w-12 rounded-full' src={`${user.photoURL}`} alt="" />
                                <a onClick={handelLogout} className="btn btn-outline text-white border-none">Logout</a>
                            </div>
                            :
                            <button onClick={handelLogout} className="btn btn-outline text-white border-none ">
                                <Link to="/login">Login</Link>
                            </button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;