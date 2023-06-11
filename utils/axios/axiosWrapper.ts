import { AxiosRequestType } from "@/Types/Requests";
import { BACKEND_URL } from "@/features/slices/GlobalSlice";
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";

import { DecodedTokenType } from "@/Types/Auth";
import { logout, refreshTokens } from "@/features/slices/AuthSlice";
import { toast } from "react-toastify";
import { store } from "@/features/store/store";

const AxiosWrapper = async ({
  method,
  url,
  data,
  headers,
}: AxiosRequestType) => {
  let accessToken =
    typeof window !== "undefined" && localStorage.getItem("accessToken")!;
  let refreshToken =
    typeof window !== "undefined" && localStorage.getItem("refreshToken")!;
  let newAccessToken: string = "";
  try {
    const axiosInstance = axios.create({
      method,
      url: BACKEND_URL + url,
      data,
    });

    axiosInstance.interceptors.request.use(async (config: any) => {
      const currentToken: DecodedTokenType = jwtDecode(
        accessToken || localStorage.getItem("accessToken")!
      );
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
              ...headers,
            },
          });

          newAccessToken = response?.data?.accessToken;
          const newRefreshToken = response?.data?.refreshToken;
          accessToken = newAccessToken;

          store.dispatch(
            refreshTokens({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            })
          );
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

      return config;
    });

    const response = await axiosInstance.request({
      method,
      url: BACKEND_URL + url,
      data,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default AxiosWrapper;
