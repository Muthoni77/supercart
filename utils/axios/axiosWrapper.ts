import { AxiosRequestType } from "@/Types/Requests";
import { BACKEND_URL } from "@/features/slices/GlobalSlice";
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";

import { DecodedTokenType } from "@/Types/Auth";
import { logout, refreshTokens } from "@/features/slices/AuthSlice";
import { toast } from "react-toastify";
import { store } from "@/features/store/store";

let accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
let refreshToken =
  typeof window !== "undefined" ? localStorage.getItem("refreshToken") : "";
let newAccessToken: string = "";

const AxiosWrapper = async ({ method, url, data }: AxiosRequestType) => {
  try {
    const axiosInstance = axios.create({
      method,
      url: BACKEND_URL + url,
      data,
    });

    axiosInstance.interceptors.request.use(async (config: any) => {
      console.log("set access token");
      console.log(accessToken);
      console.log("inside the interceptor");
      const currentToken: DecodedTokenType = jwtDecode(accessToken!);
      const currentTime = moment().unix();

      //check if access token is expired
      if (currentTime > currentToken.exp) {
        console.log("Access Token Invalid");

        try {
          //fetch refresh token and access token;
          const response: any = await axios({
            method: "get",
            url: BACKEND_URL + "/auth/refresh-token",
            headers: {
              Authorization: "Bearer " + refreshToken,
            },
          });

          console.log("refresh token data");
          console.log(response?.data);

          newAccessToken = response?.data?.accessToken;
          const newRefreshToken = response?.data?.refreshToken;
          accessToken = newAccessToken;
          console.log("calling dispatch");
          store.dispatch(
            refreshTokens({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            })
          );

          console.log("dispatch ended");
        } catch (error) {
          console.log("Session error");
          toast.error("Session error, logging you out");
          store.dispatch(logout());
          window.location.href = "/";
        }
      } else {
        console.log("The token is valid");
      }

      config.headers.Authorization = "Bearer " + accessToken;
      console.log("set access token");
      console.log(accessToken);
      return config;
    });

    const response = await axiosInstance.request({
      method,
      url: BACKEND_URL + url,
      data,
    });

    console.log("returning response");

    return response;
  } catch (error) {
    return error;
  }
};

export default AxiosWrapper;
