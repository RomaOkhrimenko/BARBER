import React, {FC, useEffect, useState} from 'react';

import './Login.css'
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {useAppSelector} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";

const Login: FC = () => {
    const {isAuth} = useAppSelector(state => state.UserReducer)

    const [loginPage, setLoginPage] = useState(false)
    const [registerPage, setRegisterPage] = useState(true)

    const navigate = useNavigate()

    const switchLog = () => {
        setLoginPage(prev => !prev)
        setRegisterPage(prev => !prev)
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/account')
        }
    }, [isAuth])

    return (
        <div className="LogReg">

            <div className="loginForm">

                <LoginForm loginPage={loginPage} switchLog={switchLog} />
                <RegisterForm registerPage={registerPage} switchLog={switchLog} />

            </div>

        </div>
    );
};

export default Login;