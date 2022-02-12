import {AppDispatch} from "../store";
import axios from "axios";
import {productSlice} from "../reducers/ProductSlice";
import {ProductDetailsSlice} from "../reducers/ProductDetailsSlice"



export const fetchProduct = (keyword = '', category?: any, currentPage = 1) => async(dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())

        let link =`/barber/products?keyword=${keyword}&page=${currentPage}`
        if(category) {
            link = `/barber/products?keyword=${keyword}&category=${category}&page=${currentPage}`
        }

        await axios.get(link)
            .then(res => dispatch(productSlice.actions.productFetchingSuccess(res.data)))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchProductDetails = (id:string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(ProductDetailsSlice.actions.productDetailsRequest())

        await axios.get(`/barber/products/${id}`)
            .then(res => dispatch(ProductDetailsSlice.actions.productDetailsSuccess(res.data.product)))
    }catch (error:any) {
        dispatch(ProductDetailsSlice.actions.productDetailsError(error.message))
    }
}
