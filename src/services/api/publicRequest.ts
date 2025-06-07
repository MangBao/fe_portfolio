import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60000,
});

export const publicGET = <T = unknown>(url: string, params?: unknown): Promise<T> =>
  instance.get(url, { params }).then((res) => res.data);

export const publicPOST = <T = unknown>(url: string, data?: unknown): Promise<T> =>
  instance.post(url, data).then((res) => res.data);
