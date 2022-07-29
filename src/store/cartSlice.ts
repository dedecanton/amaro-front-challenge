import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartStore, Product } from "../types/index.types";

const initialState: CartStore = {
  cartListItem: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{product: Product, size: string}>) => {
        const product = action.payload.product
        const id = product.code_color
        const size = action.payload.size

        const existingItem = state.cartListItem.find(item => item.id === id && item.size === size)

        if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice += existingItem.price
        }else{
            const price = parseFloat(product.actual_price.split(' ')[1].replace(',','.'))
            state.cartListItem.push({
                image: product.image,
                name: product.name,
                id: product.code_color,
                price,
                quantity: 1,
                size,
                totalPrice: price,
            })
        }
        
        
    }
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
