import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SellArt = () => {

    const navigate = useNavigate()


  return (
    <div>
      <div className='flex items-center justify-center mb-10'>
        <h1 className='prata-regular sm:text-4xl font-medium'>Create your Free Gallery and Sell Your Art</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-6'>
        <img className='sm:w-[20%]' src={assets.girl} alt="" />
        <div className='space-y-7'>
            <p className='text-2xl'>It's free and easy
            <br/><span className='text-sm'>No membership fees. No commission. Start selling in minutes. Completely free with unlimited space to sell all of your art!</span></p>
            <p className='text-2xl'>Get paid instantly
            <br/><span className='text-sm'>Instantly accept Visa, MasterCard, Discover, American Express, eChecks, PayPal, and more. OptArt processes the payments and transfers the funds directly to you, without any work required on your part. Simple, easy, and secure.</span></p>
            <p className='text-2xl'>Sell your art
            <br/><span className='text-sm'>Sell paintings, prints, originals, photography, & more. Whether you're an artist, gallery, collector, or just someone with art to sell, you can sell it on OptArt.</span></p>
            <p className='text-2xl'>Sell originals & your own prints, or use our free Print-on-Demand service
            <br/><span className='text-sm'>Sell and ship your own art including originals and prints, or have OptArt handle all your printing and shipping with Print-on-Demand, at no cost to you. Buyers can also choose from many different framing & canvas options directly from your gallery. Sell more, with less work.</span></p>
            <p className='text-2xl'>Create your free gallery
            <br/><span className='text-sm'>It's free, easy, and you'll be selling in minutes. See why over 289,000 artists sell their art with ArtPal. Create your own free gallery now!</span></p>
        </div>
      </div>
      <form className='sm:pl-[22%] pl-[2%]  mb-10 mt-10'>
        <div>
            <p className='text-xl font-semibold'>Your Email</p>
            <input className='py-2 px-12 rounded border-t' type="email" name="email"  required/>
            <p className='text-sm font-sans'>You'll use this email to login to your gallery and
                <br />receive order notifications.
                <br />Your email is kept private and is not shared</p>
        </div>
        <div className='mt-5'>
            <p className='text-xl font-semibold'>Retype Email</p>
            <input className='py-2 px-12 rounded border-t' type="email" name="email"  required/>
        </div>
        <div className='mt-5'>
            <p className='text-xl font-semibold'>Create Password</p>
            <input className='py-2 px-12 rounded border-t' type="password" name="email"  required/>
            <p className='text-sm font-sans'>By registering, you indicate that you agree to
            <br />the Terms of Service and Privacy Policy.</p>
        </div>
        <button className='mt-5 bg-yellow-500 py-2 px-20 rounded-xl border-spacing-4'>Create your Free Gallery</button>
        <div className='mt-8 flex gap-5'>
            <p>Already a member?</p>
            <button onClick={()=> navigate("/login")} className='bg-gray-400 px-5 py-1 rounded'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default SellArt
