import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ArtContext } from '../context/ArtContext'

const DisplayArt = () => {

  const {currency} = useContext(ArtContext)


  return (
    <div className='sm:grid grid-cols-3  sm:space-y-1 space-y-5  sm:gap-5  gap-10 mt-10'>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90  ' src={assets.p_img1} alt="" />
        <p className='text-2xl text-gray-500'>Beautiful river side</p>
        <p className='text-2xl text-gray-500'>{currency} 100</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90 ' src={assets.p_img4} alt="" />
        <p className='text-2xl text-gray-500'>Urban China</p>
        <p className='text-2xl text-gray-500'>{currency} 200</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img3} alt="" />
        <p className='text-2xl text-gray-500'>Estern castel</p>
        <p className='text-2xl text-gray-500'>{currency} 350</p>
      </div>
      <div className='flex flex-col cursor-pointer '>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img2} alt="" />
        <p className='text-2xl text-gray-500'>Solo Eyes</p>
        <p className='text-2xl text-gray-500'>{currency} 150</p>
      </div>
      <div className='flex flex-col'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img5} alt="" />
        <p className='text-2xl text-gray-500'>Dragon of Shinfu</p>
        <p className='text-2xl text-gray-500'>{currency} 90</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img10} alt="" />
        <p className='text-2xl text-gray-500'>Hummimg Bird</p>
        <p className='text-2xl text-gray-500'>{currency} 120</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img12} alt="" />
        <p className='text-2xl text-gray-500'>Fig Owl</p>
        <p className='text-2xl text-gray-500'>{currency} 500</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img7} alt="" />
        <p className='text-2xl text-gray-500'>Flames</p>
        <p className='text-2xl text-gray-500'>{currency} 220</p>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <img className='h-[100%] w-[100%] rounded-3xl transition duration-300 ease-in-out hover:scale-90' src={assets.p_img8} alt="" />
        <p className='text-2xl text-gray-500'>Magical Flower</p>
        <p className='text-2xl text-gray-500'>{currency} 150</p>
      </div>
    </div>
  )
}

export default DisplayArt
