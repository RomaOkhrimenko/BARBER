import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice'
import ProductDetailsReducer from "./reducers/ProductDetailsSlice";
import UserReducer from './reducers/UserSlice'
import CartReducer from './reducers/CartSlice'

const rootReducer = combineReducers({
    productReducer,
    ProductDetailsReducer,
    UserReducer,
    CartReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
