import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import Cart from '../../screens/cart/Cart'
import Singleproduct from '../../screens/singleproduct/Singleproduct'
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux'

const Routerconfig = () => {
    // UseSelector
    const cart = useSelector(state => state.cartItems.cartItems);
  return (
    <BrowserRouter>
    <Navbar items={cart.length} />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:id' element={<Singleproduct/>}/>
        <Route path='cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig