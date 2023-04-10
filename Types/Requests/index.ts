export interface AxiosRequestType {
  method: string;
  url: string;
  data: any;
}
export interface ResponseDataType {
  success: boolean;
  message: string;
  data?: any;
}
