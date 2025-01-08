import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import cart_logo from '../assets/cart_icon.png'
import profile_logo from '../assets/profile_icon.png'
import dropdown from "../assets/dropdown_icon.png"

const Navbar = () => {




  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to="/"><img className='sm:w-32 w-20 rounded-3xl' src={logo} alt="" /></Link>
      <ul className='hidden sm:flex gap-20 text-sm text-gray-700'>
        <NavLink to="/buyart"  className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>Buy Art</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/sellart"  className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>Sell Art</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/myorders" className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>My Orders</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
      </ul>




       {/* ---------menu for small screen---------- */}

       <ul className='flex flex-col sm:hidden gap-2 text-sm text-gray-700'>
        <NavLink to="/buyart"  className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>Buy Art</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/sellart"  className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>Sell Art</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/myorders" className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
            <p>My Orders</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
      </ul>




      <div className='flex flex-col sm:flex-row gap-3 sm:gap-10  items-center'>
        <div className='flex gap-2 items-center'>
        <img className='w-5 sm:w-10' src={profile_logo} alt="" />
            <NavLink to="/login" className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
                <p>Login</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
            </NavLink>
        </div>
        
        <div className='flex gap-2 items-center'>
            <img className='w-5 sm:w-10' src={cart_logo} alt="" />
            <NavLink to="/cart" className="flex flex-col items-center gap-1 text-xl sm:text-2xl">
                <p>Cart</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
