import React, {FC, useState} from 'react';
import logImage from "../../image/barber-banner.jpg";

import './LoginForm.css'
import {useAppDispatch} from "../../hooks/redux";
import {LoginUser, RegisterUser} from "../../store/actions/UserActionCreator";

interface LoginState {
    loginPage: Boolean;
    switchLog: () => void
}

const LoginForm: FC<LoginState> = ({loginPage, switchLog}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()

    return (
        <div className={"loginForm-login"}>
            <img className={loginPage ? "loginForm-login-image active" : 'loginForm-login-image'} src={logImage} alt="logImage"/>
            <div  className={loginPage ? "loginForm-login-log-con active": 'loginForm-login-log-con'}>
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <span onClick={() => switchLog()}>Уже еще нету аккаунта?</span>
                    <input type="submit" value={"Войти"} onClick={(e) => {
                        e.preventDefault()
                        dispatch(LoginUser(email, password))
                    }} />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;