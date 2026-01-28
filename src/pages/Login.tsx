/**
 * Login Page Component
 *
 * Provides user authentication interface with email and password fields
 * Redirects to main app on successful login
 * Pre-filled with demo credentials for development
 */
import { useEffect, useState } from "react";

import Button from "../components/Button.tsx";
import NavBar from "../components/NavBar.tsx";
import { useAuth } from "../components/contexts/FakeAuthContext.tsx";
import { useNavigate } from "react-router-dom";

function Login() {
  // State for form inputs with default demo values
  const [email, setEmail] = useState("matt123@example.com");
  const [password, setPassword] = useState("1234567890**");

  // Get authentication methods and state
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * Prevents default form behavior and calls login function
   */
  function handleSubmit(e: any) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }

  /**
   * Redirect to app page when user is authenticated
   * Uses replace to prevent back navigation to login
   */
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate],
  );

  return (
    <main className="h-[calc(100vh-2.5rem)] m-5">
      <NavBar />

      <form
        className="flex flex-col items-center justify-center mt-20 mx-auto rounded p-4 w-[50%] bg-gray-500/65 shadow-xl max-lg:w-[90%] transition-all duration-300"
        onSubmit={handleSubmit}
      >
        {/* Email input field */}
        <div className="flex flex-col w-[90%]">
          <label htmlFor="email" className="text-white font-bold">
            Email:
          </label>
          <input
            id="email"
            type="text"
            className="border border-white bg-white/25 mt-2 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        {/* Password input field */}
        <div className="flex flex-col w-[90%]">
          <label htmlFor="password" className="text-white font-bold">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="border border-white bg-white/25 mt-2 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />

        {/* Submit button */}
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </main>
  );
}

export default Login;
