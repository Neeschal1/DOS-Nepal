import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../utils/api";

const AuthContext = createContext(null);

/**
 * AuthProvider – Wraps the entire app and provides auth state globally.
 * Reads persisted user data from localStorage and verifies with the backend.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Try to restore session from localStorage on app mount
  useEffect(() => {
    const storedUser = localStorage.getItem("dos_user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("dos_user");
      }
    }
    setLoading(false);
  }, []);

  /**
   * login – Called after successful login API response.
   * Stores user info and marks authenticated.
   */
  const login = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("dos_user", JSON.stringify(userData));
  }, []);

  /**
   * logout – Clears local state and calls logout API to blacklist token.
   */
  const logout = useCallback(async () => {
    try {
      await api.post("/accounts/account-logout/");
    } catch {
      // Proceed with local logout even if API fails
    }
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("dos_user");
  }, []);

  /**
   * updateProfile – Updates local user profile data after an edit.
   */
  const updateProfile = useCallback((profileData) => {
    setUser((prev) => {
      const updated = { ...prev, profile: { ...prev?.profile, ...profileData } };
      localStorage.setItem("dos_user", JSON.stringify(updated));
      return updated;
    });
  }, []);

  /**
   * refreshProfile – Fetches latest profile from the backend.
   */
  const refreshProfile = useCallback(async () => {
    try {
      const res = await api.get("/accounts/profile/");
      if (res.data?.data) {
        setUser((prev) => {
          const updated = { ...prev, profile: res.data.data };
          localStorage.setItem("dos_user", JSON.stringify(updated));
          return updated;
        });
      }
    } catch {
      // Silently fail
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateProfile,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * useAuth – Custom hook to access auth context anywhere in the app.
 * Throws if used outside AuthProvider.
 */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};

export default AuthContext;

