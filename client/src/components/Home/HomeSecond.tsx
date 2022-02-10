import React, {FC} from 'react';
import separator from '../../image/separator_bottom.webp'

import './HomeSecond.css'
import {useNavigate} from "react-router-dom";

const HomeSecond: FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="homeService-about">
                <div className="homeService-about-img"></div>
                <div className="homeService-about-col">
                    <div>
                    <h2>Welcome to Berger</h2>
                    <span>Berger is an amazing barbershop located in the heart of the Upper West Side Manhattan</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                    <button onClick={() => navigate('/about')}>More About Us</button>
                    </div>
                </div>
            </div>
            <div className="homeService-about-row">
                <div className="homeService-about-img homeService-about-img-price"></div>
                <div className="homeService-about-col-price">
                    <div>
                        <h2>Prices List</h2>
                        <img src={separator} alt="separator"/>
                        <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        <ul>
                            <li><span>Haircut</span> <span>$40</span></li>
                            <li><span>Shave</span><span>$40</span></li>
                            <li><span>Haircut + Shave</span><span>$40</span></li>
                            <li><span>Trim (Back and Sides)</span><span>$40</span></li>
                            <li><span>Beard Trim</span><span>$40</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomeSecond;