import { showError } from "../../utils/notification";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

// Lưu token vào localStorage
export const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

// Lấy access token
export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

// Lấy refresh token
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

// Xóa token
export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// Hàm gọi refresh token API
export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_BASE_URL ||
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    const data = await res.json();

    if (res.ok && data?.accessToken && data?.refreshToken) {
      setTokens(data.accessToken, data.refreshToken);
      return data.accessToken;
    }

    throw new Error("Refresh token failed");
  } catch (error) {
    showError(error);
    clearTokens();
    return null;
  }
};
