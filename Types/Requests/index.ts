export interface AxiosRequestType {
  method: string;
  url: string;
  data: any;
  headers?: any;
}
export interface ResponseDataType {
  success: boolean;
  message: string;
  data?: any;
}
