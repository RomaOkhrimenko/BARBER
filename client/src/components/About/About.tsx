import React from 'react';
import {useNavigate} from "react-router-dom";

import aboutimg from '../../image/our-serv3.jpg'
import separator from '../../image/separator_bottom.webp'
import './About.css'

const About = () => {

    const navigate = useNavigate()

    return (
        <main className="aboutMain">
            <div className="header-top">
                <h2>About Us</h2>
                <div>
                    <span onClick={() => navigate('/')}>Home</span>
                    /
                    <span onClick={() => navigate('/product')}>Shop</span>
                    /
                    <span>Cutting</span>
                </div>
            </div>

            <div className="about">

                    <div className="about-us">
                        <div>
                        <img src={aboutimg} alt="aboutimg"/>
                        <div className="about-us-info">
                            <h2>About Berger</h2>
                            <div>
                            <img src={separator} alt="separator" />
                            </div>
                            <span>More than just a hair salon, we provide classic barbershop service with legendary style.</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            <p>Odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        </div>
                    </div>
                </div>


        </main>
    );
};

export default About;