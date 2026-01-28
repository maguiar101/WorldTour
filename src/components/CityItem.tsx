/**
 * CityItem Component
 *
 * Renders a single city in the cities list
 * Features:
 * - Clickable link to city details
 * - Shows city name, emoji, and date visited
 * - Delete button (X) to remove city
 * - Highlighted when active (currently viewing)
 */
import { Link } from "react-router-dom";
import { useCities } from "./contexts/CitiesContext";

/**
 * Format date to a shorter string
 * @param date - Date to format
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
const formatDate = (date: any) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }: { city: any }) {
  // Get current city and delete function from context
  const { currentCity, deleteCity } = useCities();

  // Destructure city properties
  const { cityName, emoji, date, id, position } = city;

  /**
   * Handle delete button click
   * Prevents navigation and deletes the city
   */
  function handleClick(e: any) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      {/* Link to city details with lat/lng in URL for map positioning */}
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`flex flex-row justify-between items-center rounded-lg  border-l-6 border-l-green-400/70 bg-gray-600/55 hover:bg-gray-500/55 mx-2 text-white ${id === currentCity?.id ? "cityItem--active" : ""} `}
      >
        {/* City name with emoji */}
        <div className="flex justify-center items-center gap-1">
          <span className="ml-1">{emoji}</span>
          <h1 className="text-xl max-md:text-base py-2 transition-all duration-300">
            {cityName}
          </h1>
        </div>

        {/* Date and delete button */}
        <div className="flex justify-center items-center gap-2">
          <time className="text-sm transition-all duration-300">
            ({formatDate(date)})
          </time>

          {/* Delete button */}
          <button
            className="flex justify-center items-center border border-white opacity-60 hover:opacity-100 rounded-full w-4 h-4 mr-1 text-[0.5rem] bg-black/ cursor-pointer transition-all duration-300"
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
