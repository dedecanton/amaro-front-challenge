import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartStore, Product } from "../types/index.types";
import createNewCartItem from "../utils/createNewCartItem";
import findCartItem from "../utils/findCarItem";

const initialState: CartStore = {
  cartListItem: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ product: Product; size: string }>
    ) => {
      const { product, size } = action.payload;
      const id = product.code_color + size;

      const existingItem = findCartItem(id, size, state.cartListItem);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      } else {
        const newProduct = createNewCartItem(product, size);
        state.cartListItem.push(newProduct);
      }
    },
    incrementItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const { id, size } = action.payload;
      const existingItem = findCartItem(id, size, state.cartListItem);

      if (!existingItem) throw new Error("Product not found");

      existingItem.quantity++;
      existingItem.totalPrice += existingItem.price;
    },
    decrementItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const { id, size } = action.payload;
      const existingItem = findCartItem(id, size, state.cartListItem);

      if (!existingItem) throw new Error("Product not found");

      if (existingItem.quantity === 1) {
        state.cartListItem = state.cartListItem.filter(
          (item) => item.id !== id || item.size !== size
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    deleteItem: (
      state,
      action: PayloadAction<{ id: string; size: string }>
    ) => {
      const { id, size } = action.payload;
      state.cartListItem = state.cartListItem.filter(
        (item) => item.id !== id || item.size !== size
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
