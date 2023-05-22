import { CartItem } from "@/Types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewProduct: (state: any, action: any) => {
      state.products = [action.payload, ...state.products];
      toast.success("Added to cart successfully");
    },
    addProductQuantity: (state, action) => {},
  },
});

export const { addNewProduct, addProductQuantity } = CartSlice.actions;
export default CartSlice.reducer;
