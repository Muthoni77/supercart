import { ProductSliceInitialState } from "@/Types/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductSliceInitialState = {
  showProductModal: true,
  currentProduct: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    toggleShowModal: (state, action) => {
      state.showProductModal = action.payload;
      if (!action.payload) {
        state.currentProduct = null;
      }
    },
  },
});

export const { setCurrentProduct, toggleShowModal } = ProductSlice.actions;
export default ProductSlice.reducer;
