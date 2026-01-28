/**
 * User Component
 *
 * Displays logged-in user information and logout button
 * Shows:
 * - User avatar
 * - Welcome message with user name
 * - Logout button
 *
 * Positioned absolutely in top-right corner of main app
 */
import { useAuth } from "./contexts/FakeAuthContext.tsx";
import { useNavigate } from "react-router-dom";

function User() {
  // Get user data and logout function from auth context
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle logout button click
   * Logs out user and redirects to homepage
   */
  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className=" flex items-center gap-4 bg-gray-700 h-16 px-2 rounded-xl absolute right-2 z-1000 my-2 mx-5">
      {/* User avatar */}
      <img
        className="rounded-full h-14 w-14"
        src={user.avatar}
        alt={user.name}
      />

      {/* Welcome message */}
      <span className="text-gray-300 text-xl">Welcome, {user.name}</span>

      {/* Logout button */}
      <button
        className="text-gray-300 text-xl bg-gray-500/35 hover:bg-gray-500/75 p-1 rounded-lg duration-200 transition-all"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
