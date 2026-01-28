/**
 * AppNav Component
 *
 * Navigation tabs for switching between Cities and Countries views
 * Used in the sidebar of the main application
 */
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className="">
      {/* Tab navigation between Cities and Countries */}
      <ul className="flex bg-gray-400/55 w-fit border border-black/75 rounded-lg mx-auto text-white text-lg navStyle transition duration-300 ease-in-out">
        {/* Cities tab */}
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        {/* Countries tab */}
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
