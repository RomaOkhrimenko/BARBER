import React, {useEffect} from 'react';

import separator from '../../image/separator_bottom.webp'
import {homeProduct} from "../../features/homeProduct";
import ProductCard from "../Product/ProductCard";

import './HomeShop.css'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProduct} from "../../store/actions/ProductActionCreator";

const HomeShop = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {products} = useAppSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const mainProduct = products.slice(0, 4)

    return (
        <div className="homeShop">
            <div className="homeShop-container">
            <h2>From The Shop</h2>
            <img src={separator} alt="separator"/>
            <div className="product-container">
                {mainProduct.map((product, index) => (
                    <ProductCard key={product._id} image={product.images[0].url} title={product.name} price={product.price} id={product._id} />
                ))}
            </div>

             <button onClick={() => navigate('/product')}>All Product</button>
            </div>
        </div>
    );
};

export default HomeShop;