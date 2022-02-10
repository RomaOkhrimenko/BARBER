import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartProduct, IProduct} from "../../models/IProduct";
import cartItems from "../../components/Basket/CartItems";

export interface СartSliceState {
    cartItems: ICartProduct[],
    itemsCount: number,
    totalPrice: number,
}

const initialState: СartSliceState = {
    cartItems: [],
    itemsCount: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action:PayloadAction<ICartProduct>) {
            const item = action.payload

            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            )

            if(isItemExist) {
                 cartItems: state.cartItems.map(i => (
                    i.product === isItemExist.product ? item : i
                ))

            }else {
                state.cartItems = [...state.cartItems, item]
                state.itemsCount = state.cartItems.length
            }
        },
        deleteCartItems(state, action) {
           const updateCartItems = state.cartItems.filter(item => item.product !== action.payload)
            state.cartItems = updateCartItems
            state.itemsCount = state.cartItems.length
        },
        incrementPrice(state, action) {
            state.totalPrice += action.payload
        },
        decrementPrice(state, action) {
            state.totalPrice -= action.payload
        },
        incrementStock(state, action) {
         let existItem = state.cartItems.find(item => item.product == action.payload)
            if(existItem) {
                existItem.stock = existItem.stock + 1
               const itemIndex = state.cartItems.findIndex(res => res.product == existItem?.product)
               state.cartItems = [
                   ...state.cartItems.slice(0, itemIndex),
                   existItem,
                   ...state.cartItems.slice(itemIndex + 1)
               ]
            }
         const reducer = (previousValue: any, currentValue: any) => previousValue + currentValue
         const totPrice = state.cartItems.map(item => item.price * item.stock)
         state.totalPrice = totPrice.reduce(reducer)
        },
        decrementStock(state, action) {
            let existItem = state.cartItems.find(item => item.product == action.payload)
            if(existItem) {
                existItem.stock = existItem.stock - 1
                if(existItem.stock < 1) {
                    existItem.stock = 1
                    return
                }
                const itemIndex = state.cartItems.findIndex(res => res.product == existItem?.product)
                state.cartItems = [
                    ...state.cartItems.slice(0, itemIndex),
                    existItem,
                    ...state.cartItems.slice(itemIndex + 1)
                ]
                state.totalPrice = state.totalPrice - existItem.price
            }

        }


    }


})

export default cartSlice.reducer