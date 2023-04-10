import { AxiosRequestType } from "@/Types/Requests";
import { BACKEND_URL } from "@/features/slices/GlobalSlice";
import { useAppSelector } from "@/hooks";
import axios from "axios";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
const refreshToken =
  typeof window !== "undefined" ? localStorage.getItem("refreshToken") : "";

const axiosWrapper = async ({ method, url, data }: AxiosRequestType) => {
  try {
    const response = await axios({
      method,
      url: BACKEND_URL + url,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};
export default axiosWrapper;
