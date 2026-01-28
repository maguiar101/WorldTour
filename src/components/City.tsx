/**
 * City Detail Component
 *
 * Displays detailed information about a single city
 * Shows:
 * - City name with flag emoji
 * - Date visited (formatted)
 * - User notes about the trip
 * - Link to Wikipedia for more information
 */
import BackButton from "./BackButton.tsx";
import LoaderV2 from "./Loader/LoaderV2.tsx";
import { useCities } from "./contexts/CitiesContext";
import { useEffect } from "react";
import { useParams } from "react-router";

/**
 * Format date to a readable string
 * @param date - Date string to format
 * @returns Formatted date string (e.g., "Monday, January 15, 2024")
 */
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // Get city ID from URL parameters
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  /**
   * Fetch city details when component mounts or ID changes
   */
  useEffect(
    function () {
      if (id) getCity(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  // Show loader while fetching data
  if (isLoading) return <LoaderV2 />;

  // Handle case where city is not found
  if (!currentCity) return <div>City not found</div>;

  // Destructure city data
  const { cityName, emoji, date, notes } = currentCity;

  // Additional validation: ensure loaded city matches URL ID
  if (currentCity.id.toString() !== id) return <LoaderV2 />;

  // Final validation for city name
  if (!cityName) return <div>City not found</div>;

  return (
    <div className="city flex flex-col gap-4 rounded mx-4 p-4 bg-gray-600/45 text-white">
      {/* City name section */}
      <div className="flex flex-col gap-2 items-start">
        <h6>City Name</h6>
        <h3 className="text-2xl">
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      {/* Date visited section */}
      <div className="flex flex-col gap-2 items-start">
        <h6>You went to {cityName} on</h6>
        <p className="text-xl">{date ? formatDate(date) : null}</p>
      </div>

      {/* Notes section - only shown if notes exist */}
      {notes && (
        <div className="flex flex-col gap-2 items-start">
          <h6>Your Notes</h6>
          <p className="text-xl">{notes}</p>
        </div>
      )}

      {/* Wikipedia link section */}
      <div className="flex flex-col gap-2 items-start">
        <h6>Learn More</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="text-yellow-400 text-base underline"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      {/* Back button */}
      <div className="mx-auto">
        <BackButton />
      </div>
    </div>
  );
}

export default City;
