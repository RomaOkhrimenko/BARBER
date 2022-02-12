import {UserSlice} from '../reducers/UserSlice'
import {AppDispatch} from "../store";
import AuthService from "../../services/AuthService";
import {$api, BASE_URL} from "../../http";
import axios from "axios";
import {AuthResponse} from "../../models/response/AuthResponse";

export const LoginUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.loginRequest())
        const response = await $api.post('/login', {email, password})
        localStorage.setItem('token', response.data.accessToken)
        dispatch(UserSlice.actions.loginSuccess(response.data.user))
    }catch (error: any) {
        dispatch(UserSlice.actions.loginError(error.message))
    }
}

export const RegisterUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.registerRequest())
        const response = await $api.post('/registration', {email, password})
        localStorage.setItem('token', response.data.accessToken)
        dispatch(UserSlice.actions.registerSuccess(response.data.user))
    }catch (error: any) {
        dispatch(UserSlice.actions.registerError(error.response?.data?.message))
    }
}

export const LogoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.logoutRequest())
        await AuthService.logout()
            .then(response => localStorage.removeItem('token'))
            .then(response => dispatch(UserSlice.actions.logoutSuccess))
    }catch (error: any) {
        dispatch(UserSlice.actions.logoutError(error.response?.data?.message))
    }
}

export const checkAuth = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.loginRequest())
       const response = await axios.get<AuthResponse>(`/barber/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken)
        dispatch(UserSlice.actions.loginSuccess(response.data.user))
    }catch (error:any) {
        dispatch(UserSlice.actions.loginError(error))
    }
}