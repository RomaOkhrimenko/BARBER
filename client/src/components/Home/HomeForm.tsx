import React from 'react';
import separator from "../../image/separator_bottom.webp";
import {notlifySuccess} from "../Alert/Alert";

import './HomeForm.css'

const HomeForm = () => {

    function sendOrder(e: any) {
        e.preventDefault()
        notlifySuccess("Заказ отправлен")
    }

    return (
        <div className="homeForm" id={'form'}>
            <div className="homeForm-container">
                <div className="homeForm-empty-height"></div>
                <h2>Make an Appointment</h2>
                <img src={separator} alt="separator"/>

                <form className="homeForm-form" onSubmit={sendOrder}>
                    <div className="form-container">
                        <div className="form-row">
                            <input type="text" required placeholder="Name*"  />
                            <input type="email" required placeholder="E-mail*"  />
                        </div>

                        <div className="form-row">
                            <input type="text" required placeholder="Phone number*"  />
                            <input type="text" required placeholder="Date*"  />
                        </div>

                        <textarea placeholder="Message"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default HomeForm;