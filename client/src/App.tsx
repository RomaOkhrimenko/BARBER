import React, {FC, useEffect} from 'react';
import './App.css';
import Header from "./components/layout/Header";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductDetails from "./components/Product/ProductDetails";
import Login from "./components/Login/Login";
import {useAppDispatch} from "./hooks/redux";
import {checkAuth} from "./store/actions/UserActionCreator";
import {checkItemsCart} from "./store/actions/CartActionCreator";
import {ICartProduct} from "./models/IProduct";
import Basket from "./components/Basket/Basket";
import About from "./components/About/About";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css'


const App:FC = () => {
    const dispatch = useAppDispatch()

    useEffect( () => {
         if(localStorage.getItem('token')) {
             dispatch(checkAuth())
         }

         if(localStorage.getItem("cartItems")) {
            const item = JSON.parse(localStorage.getItem("cartItems")!)
             item.map((i:ICartProduct) => dispatch(checkItemsCart(i)))
         }
    }, [])

  return (
    <div className="app">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>

    </div>
  );
}

export default App;
