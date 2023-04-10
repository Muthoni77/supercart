import { AxiosRequestType } from "@/Types/Requests";
import { BACKEND_URL } from "@/features/slices/GlobalSlice";
import axios from "axios";

const publicAxiosWrapper = async ({
  method,
  url,
  data = {},
}: AxiosRequestType) => {
  try {
    const response = await axios({
      method,
      url: BACKEND_URL + url,
      data,
    });

    return response;
  } catch (error) {
    return error;
  }
};
export default publicAxiosWrapper;
