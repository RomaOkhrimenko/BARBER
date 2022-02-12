import {AppDispatch} from "../store";
import {BASE_URL} from "../../http";
import axios from "axios";
import {cartSlice, СartSliceState} from '../reducers/CartSlice'
import {ICartProduct} from "../../models/IProduct";


export const addItemsToCart = (id: string) => async(dispatch: AppDispatch, getState: any) => {
   const {data} = await axios.get(`/barber/products/${id}`)

    dispatch(cartSlice.actions.addToCart({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        images: data.product.images[0].url,
        category: data.product.category,
        stock: 1
    }))

    localStorage.setItem("cartItems", JSON.stringify(getState().CartReducer.cartItems))
    dispatch(cartSlice.actions.incrementPrice(data.product.price))
}

export const checkItemsCart = (item: ICartProduct) => async(dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.addToCart(item))
    dispatch(cartSlice.actions.incrementPrice(item.price))
}

export const deleteCartItems = (id: string, price:number) => async(dispatch: AppDispatch, getState: any ) => {
    dispatch(cartSlice.actions.deleteCartItems(id))
    localStorage.removeItem('cartItems')
    localStorage.setItem('cartItems', JSON.stringify(getState().CartReducer.cartItems))
    dispatch(cartSlice.actions.decrementPrice(price))
}

export const incrementStock = (id:string) => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.incrementStock(id))
}

export const decrementStock = (id: string) => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.decrementStock(id))
}