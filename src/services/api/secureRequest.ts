/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "./axiosClient";

export const secureGET = <T = any>(url: string, params?: any): Promise<T> =>
  axiosInstance.get(url, { params }).then((res) => res.data);

export const securePOST = <T = any>(url: string, data?: any): Promise<T> =>
  axiosInstance.post(url, data).then((res) => res.data);
