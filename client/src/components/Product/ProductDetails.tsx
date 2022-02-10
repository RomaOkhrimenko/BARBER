import React, {FC, useEffect, useState} from 'react';

import './ProductDetails.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProductDetails} from "../../store/actions/ProductActionCreator";
import {useNavigate, useParams} from "react-router-dom";
import {addItemsToCart} from "../../store/actions/CartActionCreator";



const ProductDetails: FC = () => {

    const dispatch = useAppDispatch()
    const {product, isLoading} = useAppSelector(state => state.ProductDetailsReducer)
    const {cartItems} = useAppSelector(state => state.CartReducer)

    let {id} = useParams()
    const navigate = useNavigate()

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id!))
    }

    const itemIsExist = cartItems.find(item => item.product == id)

    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [])


    return (
        <>
            {isLoading ? <>...Loading</> : <>
                <div className="header-top">
                    <h2>Shop</h2>
                    <div>
                        <span onClick={() => navigate('/')}>Home</span>
                        /
                        <span onClick={() => navigate('/product')}>Shop</span>
                        /
                        <span>{product.category}</span>
                    </div>
                </div>

                <div className="productDetails">
                    <img src={product.images[0]?.url} alt={product.name}/>
                    <div className="productDetails-info">
                        <h2>{product.name}</h2>
                        <span>{product.price}</span>
                        <p>{product.description}</p>
                        {itemIsExist ? <button onClick={() => navigate('/basket')}>View Cart</button>
                            : <button onClick={addToCartHandler}>ADD TO CART</button>}
                    </div>
                </div>

                <div className="productDetails-phone">
                    <h2>{product.name}</h2>
                    <img src={product.images[0]?.url} alt={product.name} />
                    <span>{`${product.price}$`}</span>
                    <p>{product.description}</p>
                    {itemIsExist ? <button onClick={() => navigate('/basket')}>View Cart</button>
                        : <button onClick={addToCartHandler}>ADD TO CART</button>}
                </div>


            </>}
        </>
    );
};

export default ProductDetails;