import React, {useEffect, useState} from 'react';

import closeImg from '../../image/close.png'

import './CartItems.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {decrementStock, incrementStock} from "../../store/actions/CartActionCreator";

interface CartProps {
    images: string,
    price: number,
    name: string,
    deleteCartItem?: any,
    product: string,
    stock: number
}

const CartItems = ({images, price, name, deleteCartItem, product, stock}:CartProps) => {

    const dispatch = useAppDispatch()

    const currentPrice = stock * price

    return (
        <>
        <div className="cartItems">
            <div className="cartItem-preview">
                <img src={images} alt={name}/>
                <span>{name}</span>
            </div>

            <span>{`${currentPrice}$`}</span>
            <div className="button-numb">
                <span onClick={() => dispatch(decrementStock(product))}>-</span>
                <span>{`${stock}`}</span>
                <span onClick={() => dispatch(incrementStock(product))}>+</span>
            </div>
            <div className="price-del">
                <span>{`${currentPrice}$`}</span>
                <img onClick={() => deleteCartItem(product, price)} src={closeImg} alt="closeImg"/>
            </div>
        </div>
        </>
    );
};

export default CartItems;