import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, actions) => {
            state.cartItems.push({
                title: actions.payload.title,
                description: actions.payload.description,
                image: actions.payload.image,
                id: actions.payload.id,
            })
        },
        removeCartItem: (state, actions) => {
            state.cartItems.splice(actions.payload.index, 1)
        }
    }
})

export const { addToCart, removeCartItem } = cartSlice.actions
export default cartSlice.reducer