import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/response/IUser";

interface UserState {
    user: IUser,
    isAuth: boolean,
    error: string | null,
    isLoading: boolean
}

const initialState: UserState = {
    user: {email: '', id: '', isActivated: false},
    isAuth: false,
    error: null,
    isLoading: false
}

export const UserSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        loginRequest(state) {
            state.isLoading = true
        },
        loginSuccess(state, action) {
            state.isLoading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        loginError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        registerRequest(state) {
            state.isLoading = true
        },
        registerSuccess(state, action) {
            state.isLoading = false
            state.error = null
            state.isAuth = true
            state.user = action.payload
        },
        registerError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

        logoutRequest(state) {
            state.isLoading = true
        },

        logoutSuccess(state) {
            state.isLoading = false
            state.user = {email: '', id: '', isActivated: false}
            state.error = null
            state.isAuth = false
        },

        logoutError(state, action) {
            state.isLoading = false
            state.error =  action.payload
        }

    }

})

export default UserSlice.reducer