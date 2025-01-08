import React, { useContext } from 'react'
import bck from "../assets/bck.jpg"
import { ArtContext } from '../context/ArtContext'
import DisplayArt from '../components/DisplayArt'
import Title from '../components/Title'

const Home = () => {

    const {artist} = useContext(ArtContext)


  return (
    <div className='flex flex-col'>
        <div className='m-none sm:m-10 flex flex-col  items-center justify-center  '>
            <img className='group relative rounded-3xl  hover:shadow-2xl  shadow-[0_0_20px_purple]' src={bck} alt="" />
            <div className='group absolute md:pt-[20%]  sm:pt-[20%]'>
                <p className=' text-white prata-regular text-sm   md:text-3xl  sm:text-3xl font-bold'>Buy art from {artist} artists all over the world</p>
                <p className=' sm:pl-[15%] prata-regular text-white text-sm sm:text-xl pt-10'>selling original art, prints, and custom framing.</p>
                <input className=' sm:m-10 m-5 sm:ml-[6%] ml-[15%]   sm:py-4 py-2 sm:px-52 px-5  rounded-full ' type="text "  placeholder='Search Art...' name="" id="" required/>
            </div>
        </div>
        <div className='text-center py-10 text-3xl'>
            <Title text1={"ART"} text2={"DISPLAY"}  />
            <DisplayArt/>
        </div>
    </div>
  )
}


export default Home
