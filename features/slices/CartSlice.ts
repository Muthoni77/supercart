import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      const newProduct = {};
    },
    addProductQuantity: (state, action) => {},
  },
});

export const { addNewProduct, addProductQuantity } = CartSlice.actions;
export default CartSlice.reducer;
