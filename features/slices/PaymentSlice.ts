import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "mpesa",
  status: "",
  CheckoutRequestID: "",
};
const PaymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setMethod: (state, action) => {
      state.method = action.payload;
    },
    setCheckoutRequestID: (state, action) => {
      state.CheckoutRequestID = action.payload;
    },
  },
});

export const { setMethod, setCheckoutRequestID } = PaymentSlice.actions;
export default PaymentSlice.reducer;
