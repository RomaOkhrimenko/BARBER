import {createSlice} from "@reduxjs/toolkit";
import {IProductDetails} from "../../models/IProduct";

interface ProductDetailsState {
    product: IProductDetails,
    isLoading: boolean,
    error: string | null
}

const initialState: ProductDetailsState = {
    product: {_id: '', name: '', description: '', price: 0, images: [], category: '', stock: 0, data: 'string'},
    isLoading: false,
    error: null
}

export const ProductDetailsSlice = createSlice({
    name: "ProductDetails",
    initialState,
    reducers: {
        productDetailsRequest(state) {
            state.isLoading = true
        },
        productDetailsSuccess(state, action) {
            state.isLoading = false
            state.error = null
            state.product = action.payload
        },
        productDetailsError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }

    }
})

export default ProductDetailsSlice.reducer