import React from 'react';

import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="banner">
            <div className="banner-info">
                <img src="https://berger.themerex.net/wp-content/uploads/2016/08/logo_home.png" alt=""/>
                <p>Premium Barbershop is the prime spot for your hair grooming needs in your city</p>
                <a href="#form">Zapis</a>
            </div>
            <div className="banner-bottom">
                <div className="banner-bottom-address">
                    <div>
                        <h4>ADDRESS</h4>
                        <span>123, NEW LENOX STREET WASHINGTON, D.C. 60606</span>
                    </div>
                </div>
                <div className="banner-bottom-phone">
                    <div>
                        <h4>CALL YS</h4>
                        <a href="+380971405110" type={"phone"}>380971405110</a>
                        <h4>FOR CHOKING</h4>
                    </div>
                </div>

                <div className="banner-bottom-hours">
                    <div>
                        <h4>HOURS</h4>
                        <ul>
                            <li>MONDAY THROUGH</li>
                            <li>SATURDAY 11 AM - 9 PM </li>
                            <li>SUNDAY 11 AM - 7 PM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;