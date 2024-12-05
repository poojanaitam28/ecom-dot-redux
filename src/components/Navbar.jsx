import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const {cart} =useSelector((state) => state)
  return (
    <div className="bg-slate-900">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="w-24 ml-5">
            <img src="https://i.pinimg.com/736x/55/74/19/557419a8847156c4d754beb1a4d031cc.jpg" />
          </div>
        </NavLink>
        <NavLink to='/'>
          <div className="flex items-center font-medium text-slate-100 ">
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to='/about'>
        <div className="items-center font-medium text-slate-100 ">
            <p>About</p>
          </div>
        </NavLink>
        <NavLink to='/contact'>
        <div className="items-center font-medium text-slate-100">
            <p>Contact</p>
          </div>
        </NavLink>
        <NavLink to='/cart'>
          <div className="relative">
            <FaCartShopping className="text-2xl text-white"/>
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">{cart.length}</span>
            }

          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
