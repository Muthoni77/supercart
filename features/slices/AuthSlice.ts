import { AuthPayloadType, AuthStateType, UserType } from "@/Types/Auth";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: AuthStateType = {
  isAuthenticated:
    typeof window !== "undefined"
      ? Boolean(localStorage.getItem("isAuthenticated"))
      : false,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") ?? "null")
      : "",
  accessToken:
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "",
  refreshToken:
    typeof window !== "undefined" ? localStorage.getItem("refreshToken") : "",
  loading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserDetails: (state, action: PayloadAction<AuthPayloadType>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.loading = false;
    },
  },
});

export const { updateUserDetails } = AuthSlice.actions;
export default AuthSlice.reducer;
