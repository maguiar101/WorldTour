/**
 * Logo Component
 *
 * Reusable logo component with customizable styling
 * Displays app logo image and "World Tour" text
 * Links to homepage when clicked
 * Accepts props for responsive design adjustments
 */
import LogoImg from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

// Type definition for logo props
interface LogoProps {
  imgClass?: string; // Optional classes for image styling
  textClass?: string; // Optional classes for text styling
  divClass?: string; // Optional classes for container div
}

function Logo({ imgClass, textClass, divClass }: LogoProps) {
  return (
    <>
      {/* Link to homepage */}
      <NavLink to="/">
        <div
          className={`flex items-center transition-opacity duration-300 ${divClass}`}
        >
          {/* Logo image */}
          <img
            className={`w-18 h-18 transition-all duration-300 ${imgClass}`}
            src={LogoImg}
            alt="World Tour Logo"
          />
          {/* App name text */}
          <h1 className={`text-2xl font-slackey text-gray-300 ${textClass}`}>
            World Tour
          </h1>
        </div>
      </NavLink>
    </>
  );
}

export default Logo;
