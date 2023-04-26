import {
  AuthPayloadType,
  AuthStateType,
  RefreshTokensType,
  UserType,
} from "@/Types/Auth";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

    updateUserProfile: (state, action: PayloadAction<UserType>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    refreshTokens: (state, action: PayloadAction<RefreshTokensType>) => {
      console.log("refresh dispatch called");
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      console.log("New tokens set");
    },

    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { updateUserDetails, updateUserProfile, refreshTokens, logout } =
  AuthSlice.actions;
export default AuthSlice.reducer;
