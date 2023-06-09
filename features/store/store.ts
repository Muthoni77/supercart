import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/AuthSlice";
import ProductsReducer from "../slices/ProductSlice";
import CartReducer from "../slices/CartSlice";
import PaymentReducer from "../slices/PaymentSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    products: ProductsReducer,
    cart: CartReducer,
    payment: PaymentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
