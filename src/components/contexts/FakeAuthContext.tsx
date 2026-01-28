/**
 * Fake Authentication Context
 *
 * Provides authentication functionality for the application
 * Uses a fake user for demonstration purposes
 *
 * Note: This is for development/demo only - not secure for production
 */
import { createContext, useContext, useReducer } from "react";

// Type definition for user object
interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

// Type definition for authentication state
interface AuthState {
  user: User | any;
  isAuthenticated: boolean;
}

// Type definition for context including auth methods
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create authentication context
const AuthContext = createContext<AuthContextType | null>(null);

// Initial authentication state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

// Type definition for reducer actions
type AuthAction = { type: "login"; payload: User } | { type: "logout" };

/**
 * Reducer function to manage authentication state
 * Handles login and logout actions
 */
function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

// Fake user credentials for demo purposes
const FAKE_USER: User = {
  name: "Matt",
  email: "matt123@example.com",
  password: "1234567890**",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

/**
 * AuthProvider component
 * Wraps children with authentication context
 */
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  /**
   * Login function
   * Validates credentials against fake user
   */
  function login(email: string, password: string) {
    if (email === FAKE_USER.email && FAKE_USER.password === password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  /**
   * Logout function
   * Clears user data and sets isAuthenticated to false
   */
  function logout() {
    dispatch({ type: "logout" });
  }

  // Provide authentication state and methods to children
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to access authentication context
 * Throws error if used outside AuthProvider
 */
function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
