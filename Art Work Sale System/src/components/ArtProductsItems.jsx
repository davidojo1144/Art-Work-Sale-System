import React, { useContext } from 'react'
import { ArtContext } from '../context/ArtContext'
import { Link } from 'react-router-dom';

const ArtProductsItems = ({id,image,description,name,price}) => {

    const {currency} = useContext(ArtContext);


  return (
    <Link className='text-gray-700 cursor-pointer' >
        <div className='overflow-hidden w-full sm:h-[60%] h-[40%]'>
            <img className='w-full h-full hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 sm:text-3xl text-2xl'>{name}</p>
        <p className='text-xl sm:text-xl font-medium'>{currency}{price}</p>
        <p className='pt-3 pb-1 sm:text-xl text-sm'>{description}</p>
    </Link>
  )
}

export default ArtProductsItems
