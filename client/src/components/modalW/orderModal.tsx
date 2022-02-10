import React from 'react';

import closeImg from '../../image/close.png'
import {notlifySuccess} from "../Alert/Alert";

import './orderModal.css'

interface IOrderModalState {
    active: boolean;
    closeModal: (arg0: boolean) => void
}

const OrderModal = ({active = false, closeModal}: IOrderModalState) => {

    function sendOrder(e: any) {
        e.preventDefault()
        notlifySuccess("Заказ отправлен")
        closeModal(false)
    }

    return (
            <div className={active ? "orderModal active" : "orderModal"}>
                <div className="orderModal-card">
                    <img onClick={() => closeModal(false)} src={closeImg} alt="closeImg"/>
                    <h3>Оформити Заказ</h3>
                    <form className="orderModal-card-form" onSubmit={sendOrder}>
                        <input type="text" required minLength={2} placeholder={"Full Name"}/>
                        <input type="email" required placeholder={"Email"} />
                        <input type="text" required placeholder={"Phone Number"}/>

                    <button type="submit"  >Отправить</button>
                    </form>
                </div>
            </div>
    );
};

export default OrderModal;