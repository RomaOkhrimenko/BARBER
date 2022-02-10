import React, {FC, useState} from 'react';
import logo from '../../image/logo.png'
import {Close, FavoriteBorder, Menu, Person, ShoppingCart} from "@material-ui/icons";

import "./Header.css"
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";


const Header: FC = () => {
    const [navbar, setNavbar] = useState(false)

    const navLink = (path:string) => {
        navigate(path)
        setNavbar(false)
    }

    const {itemsCount} = useAppSelector(state => state.CartReducer)
    const {isAuth} = useAppSelector(state => state.UserReducer)
    const navigate = useNavigate()

    return (
        <header className="header">
            <div className="header-left">
                <img onClick={() => navigate('/')} src={logo} alt="Barber Shop Logo"/>
            </div>
            <div className="header-right">
                <div onClick={() => navigate('/basket')}>
                <ShoppingCart />
                    <span>{`${itemsCount}`}</span>
                </div>
                {isAuth ? <FavoriteBorder onClick={() => navigate('/account')} /> : <Person onClick={() => navigate('/login')} />}
                <Menu onClick={() => setNavbar(prev => !prev)} />
            </div>

            <div className={navbar ? "header-nav active" : "header-nav"}>
                <Close onClick={() => setNavbar(prev => !prev)} />
                <ul>
                    <li onClick={() => navLink('/')}>Home</li>
                    <li onClick={() => navLink('/product')}>Shop</li>
                    <li onClick={() => navLink('/about')}>About</li>
                </ul>
            </div>

        </header>
    );
};

export default Header;