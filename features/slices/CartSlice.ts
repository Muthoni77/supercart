import { CartItem } from "@/Types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
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
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product: any) => product.title! !== action.payload
      );
    },
  },
});

export const { addNewProduct, addProductQuantity, removeProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
