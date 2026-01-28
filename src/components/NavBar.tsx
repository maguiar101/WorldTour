/**
 * NavBar Component
 *
 * Main navigation bar for public pages (Homepage, Product, Pricing, Login)
 * Features:
 * - Logo (links to homepage)
 * - Navigation links (Pricing, Product, Login)
 * - Responsive design with mobile adaptations
 */
import Logo from "./Logo.tsx";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBarStyle bg-none flex items-center justify-between ml-2 mr-6 pt-2 max-md:pt-0">
      {/* Logo with responsive sizing */}
      <Logo
        divClass={"opacity-75 hover:opacity-100"}
        imgClass={"max-md:w-22 max-md:h-22"}
        textClass={"max-md:hidden"} // Hide text on mobile
      />

      {/* Navigation links */}
      <ul className="flex items-center gap-4 text-white uppercase font-medium font-roboto">
        {/* Pricing page link */}
        <li>
          <NavLink to="/pricing" className="hover:text-green-300">
            Pricing
          </NavLink>
        </li>

        {/* Product page link */}
        <li>
          <NavLink to="/product" className="hover:text-green-300">
            Product
          </NavLink>
        </li>

        {/* Login page link with special styling */}
        <li>
          <NavLink
            to="/login"
            className={
              "bg-green-600 rounded-sm ml-2 px-5 py-2.5 hover:bg-green-700 transition-colors duration-200"
            }
            style={({ isActive }: any) => ({
              color: isActive ? "#032e15" : "", // Darker color when active
            })}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
