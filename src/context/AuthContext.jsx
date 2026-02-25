import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

/**
 * AuthProvider — Manages user authentication state with localStorage persistence.
 *
 * Stores registered users in localStorage under "registeredUsers".
 * Stores the currently logged-in user under "currentUser".
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, restore session from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("currentUser");
      }
    }
    setLoading(false);
  }, []);

  /** Get all registered users from localStorage */
  const getRegisteredUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    } catch {
      return [];
    }
  };

  /**
   * Register a new user.
   * @returns {{ success: boolean, message: string }}
   */
  const register = (name, email, password) => {
    const users = getRegisteredUsers();

    // Check if email already exists
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password, // In a real app, NEVER store plaintext passwords
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    // Auto-login after registration
    const sessionUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    setUser(sessionUser);
    localStorage.setItem("currentUser", JSON.stringify(sessionUser));

    return { success: true, message: "Registration successful!" };
  };

  /**
   * Log in with email and password.
   * @returns {{ success: boolean, message: string }}
   */
  const login = (email, password) => {
    const users = getRegisteredUsers();
    const found = users.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password
    );

    if (!found) {
      return { success: false, message: "Invalid email or password." };
    }

    const sessionUser = { id: found.id, name: found.name, email: found.email };
    setUser(sessionUser);
    localStorage.setItem("currentUser", JSON.stringify(sessionUser));

    return { success: true, message: "Login successful!" };
  };

  /** Log out the current user */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = { user, loading, login, register, logout, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Custom hook to access auth context */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
