import React, {useEffect, useState} from 'react';
import './Basket.css'
import CartItems from "./CartItems";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteCartItems} from "../../store/actions/CartActionCreator";
import OrderModal from "../modalW/orderModal";

const Basket = () => {
    const dispatch = useAppDispatch()
    const {cartItems, itemsCount, totalPrice} = useAppSelector(state => state.CartReducer)
    const [isOrder, setIsOrder] = useState(false)

    function deleteCartItem(id:string, price:number) {
       dispatch(deleteCartItems(id, price))
    }



    return (
        <>
            <OrderModal active={isOrder} closeModal={setIsOrder} />
        <div className="basket">
            <div className="basket-con">
            <h2>Корзина</h2>
            <div className="cartItems-container">
                {
                    itemsCount === 0 ? <>
                        <div className="basket-empty">
                        <h2>Здесь еще ничего нету</h2>
                        </div>
                    </> :
                        cartItems.map(item => (
                                <CartItems deleteCartItem={deleteCartItem} stock={item.stock} images={item.images} price={item.price} name={item.name} product={item.product} />
                            ))
                }
            </div>

            <div className="basket-result">
                <span>{`К оплате ${totalPrice.toFixed(2)}$`}</span>
                <button disabled={totalPrice == 0} onClick={() => setIsOrder(prev => !prev)}>Оформить заказ</button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Basket;