import axios from "axios";
import { getAccessToken, refreshAccessToken } from "./authToken";
import { showError } from "../../utils/notification";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  timeout: 60000,
});

// Request Interceptor: Thêm token vào headers nếu có
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Optional: thêm ngôn ngữ nếu bạn có xử lý i18n
    config.headers["Lang-Type-Code"] = "EN";

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Refresh token nếu 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken();
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        showError(refreshError);
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);
