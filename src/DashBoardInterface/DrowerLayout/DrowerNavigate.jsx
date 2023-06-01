import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaHome,
  FaComment,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCart } from "../../CustomHooks/useCart";

const DrowerNavigate = () => {
  const [cart] = useCart();

  return (
    <div className="drawer drawer-mobile bg-[#F6F6F6] ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2 " className="drawer-overlay"></label>
        <ul className="menu bg-[#FF7F0E] p-4 w-80 text-base-content">
          <li className="text-2xl font-bold mb-6">
            <h1>
              Bistro Boss <br /> Restudent
            </h1>
          </li>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaShoppingCart />
              My Cart
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaCalendar />
              Reservation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaWallet />
              Payment History
            </NavLink>
          </li>

          <div className="bg-white rounded-md h-[2px] divider"></div>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <GiHamburgerMenu />
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaShoppingCart />
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) =>
                isActive ? "active font-bold text-white bg-[#FF7F0E]" : ""
              }
            >
              <FaComment />
              Contact
            </NavLink>
          </li>

          <div className="bg-white rounded-md h-[2px] divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default DrowerNavigate;
