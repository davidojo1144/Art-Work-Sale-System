import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyArt from './pages/BuyArt'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SellArt from './pages/SellArt'
import Navbar from './components/Navbar'
import MyOrders from './pages/MyOrders'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-200'>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/buyart"  element={<BuyArt/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/sellart"  element={<SellArt/>} />
        <Route path="/myorders"  element={<MyOrders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
