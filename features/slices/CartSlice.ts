import { CartItem } from "@/Types/products";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { store } from "../store/store";

const initialState: any = {
  products: [],
  subtotal: 0,
  loading: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewProduct: (state: any, action: any) => {
      state.products = [action.payload, ...state.products];
      toast.success("Added to cart successfully");
      CartSlice.caseReducers.calculateTotal(state, action);
    },
    calculateTotal: (state, action: any) => {
      let total = 0;
      state.products.forEach((product: any) => {
        let productPrice = product.quantity * product.price;
        total += productPrice;
      });
      state.subtotal = total.toFixed(2);
    },
    addProductQuantity: (state, action) => {},
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product: any) => product.title! !== action.payload
      );
      CartSlice.caseReducers.calculateTotal(state, action);
    },
  },
});

export const { addNewProduct, addProductQuantity, removeProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
