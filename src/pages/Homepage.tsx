/**
 * Homepage Component
 *
 * Landing page for the World Tour application
 * Features:
 * - Hero section with tagline
 * - Background travel image with overlay
 * - Call-to-action button to navigate to login
 * - Navigation bar
 */
import HomepageImg from "../assets/img/travel.jpg";
import { Link } from "react-router";
import NavBar from "../components/NavBar.tsx";

function Homepage() {
  return (
    <div
      className="h-[calc(100vh-2.5rem)] m-5 box-border rounded bg-cover bg-center shadow-xl"
      // Background image with dark overlay for better text readability
      style={{
        backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${HomepageImg})`,
      }}
    >
      {/* Navigation bar */}
      <NavBar />

      {/* Hero section */}
      <div className="h-[75%] flex flex-col items-center justify-center space-y-30">
        <div className="flex flex-col items-center text-center space-y-6 mx-auto">
          {/* Main headline with emojis */}
          <h1 className="font-chewy text-5xl max-md:text-3xl text-gray-300 leading-tight transition-all duration-300">
            <span>✈️</span> You travel the World.
            <br />
            <span>🏝️</span> We save the Journey.
          </h1>

          {/* Subheadline with app description */}
          <h2 className="font-ibm text-lg max-md:text-sm text-gray-400 w-[55%] max-md:w-[70%] transition-all duration-300">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
        </div>

        {/* Call-to-action button */}
        <Link
          to="/login"
          className="rounded-2xl bg-green-600 hover:bg-green-700 py-2 px-4 transition-colors duration-200 text-white font-roboto"
        >
          Start Tracking
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
