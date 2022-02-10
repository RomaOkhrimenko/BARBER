import {IProduct} from "../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    productsCount: number;
    resultPerPage: number;
    filteredProductsCount: number;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    productsCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productFetching(state) {
            state.isLoading = true
        },
        productFetchingSuccess(state, action) {
            const {products, productsCount, resultPerPage, filteredProductsCount} = action.payload
            state.isLoading = false
            state.error = ''
            state.products = products
            state.productsCount = productsCount
            state.resultPerPage = resultPerPage
            state.filteredProductsCount = filteredProductsCount
        },
        productFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})


export default productSlice.reducer