import React, {FC, useRef} from 'react';

import './Home.css'

import HomeSecond from "./HomeSecond";
import HomeShop from "./HomeShop";
import HomeBanner from "./HomeBanner";
import HomeForm from "./HomeForm";


const Home:FC = () => {


    return (
        <>
            <HomeBanner />

            <HomeSecond />

            <HomeShop />

            <HomeForm />

        </>
    );
};

export default Home;