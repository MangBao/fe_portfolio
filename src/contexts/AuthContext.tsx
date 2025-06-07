// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAccessToken,
  clearTokens,
  setTokens,
} from "../services/api/authToken";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    setIsAuthenticated(!!token);
  }, []);

  const login = (accessToken: string, refreshToken: string) => {
    setTokens(accessToken, refreshToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearTokens();
    setIsAuthenticated(false);
    window.location.href = "/admin/login"; // redirect về login page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
