import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export const BASE_URL = "http://localhost:4000/barber"

export const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config:any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(config => {
    return config
}, async(error) => {
    const originalRequest = error.config
    if(error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (error) {
            console.log('dont authorize')
        }
    }
    throw error
})