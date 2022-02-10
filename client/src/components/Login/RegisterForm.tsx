import React, {FC, useState} from 'react';
import logImage from "../../image/bg_home.jpg";

import "./RegisterForm.css"
import {useAppDispatch} from "../../hooks/redux";
import {RegisterUser} from "../../store/actions/UserActionCreator";

interface RegisterState {
    registerPage: Boolean;
    switchLog: () => void
}


const RegisterForm: FC<RegisterState> = ({registerPage, switchLog}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()

    return (
        <div className={"loginForm-register"}>
            <img className={registerPage ? "loginForm-register-image active" : 'loginForm-register-image'} src={logImage} alt="logImage"/>
            <div className={registerPage ? "loginForm-register-log-con active": 'loginForm-register-log-con'}>
                <h2>Реєстрація</h2>
                <form>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <span onClick={() => switchLog()}>Уже есть аккаунт?</span>
                    <input
                        type="submit"
                        value={"Зарегестрироватса"}
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(RegisterUser(email, password))
                        }}
                    />
                </form>


            </div>
        </div>
    );
};

export default RegisterForm;