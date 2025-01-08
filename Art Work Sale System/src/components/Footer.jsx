import React from 'react'
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <div className='flex  justify-between pb-5 '>
      <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-8 pt-12'>
        <p className='text-gray-500 font-medium sm:text-xl'>SHARE OPT ART</p>
        <p className='text-gray-500 font-medium sm:text-xl'>TERMS</p>
        <p className='text-gray-500 font-medium sm:text-xl'>PRIVACY</p>
        <p className='text-gray-500 font-medium sm:text-xl'>CONTACT</p> 
        <p className='text-gray-500 font-medium sm:text-xl'>2025 @ OPT ART</p>
      </div>
      <img src={logo} className='w-20 pt-12 items-center  rounded-full' alt="" />
    </div>
  )
}

export default Footer
