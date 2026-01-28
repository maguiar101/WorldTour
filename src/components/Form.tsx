/**
 * Form Component
 *
 * Allows users to add a new city to their travel list
 * Features:
 * - Fetches location data based on lat/lng from URL
 * - Uses reverse geocoding API to get city and country info
 * - Converts country code to emoji flag
 * - Date picker for trip date
 * - Notes textarea for trip memories
 */
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";

import BackButton from "./BackButton.tsx";
import Button from "./Button.tsx";
import DatePicker from "react-datepicker";
import LoaderV2 from "./Loader/LoaderV2.tsx";
import { useCities } from "./contexts/CitiesContext.tsx";
import { useNavigate } from "react-router-dom";
import { useURLPosition } from "./hooks/useURLPosition.ts";

/**
 * Converts ISO country code to emoji flag
 * @param countryCode - Two-letter ISO country code (e.g., "US", "FR")
 * @returns Emoji flag representation
 */
export function convertToEmoji(countryCode: any) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char: any) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

// Reverse geocoding API endpoint
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  // Get latitude and longitude from URL parameters
  const [lat, lng] = useURLPosition();
  const navigate = useNavigate();

  // Form state
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");
  const { createCity, isLoading: isLoadingCities } = useCities();

  /**
   * Fetch city data from coordinates when lat/lng changes
   * Uses reverse geocoding to get location details
   */
  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);

        // Validate that a country was found
        if (!data.countryCode)
          throw new Error("No country found, click somewhere else!");

        // Set location data
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || "");
        setEmoji(convertToEmoji(data.countryCode || ""));
      } catch (err: any) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  /**
   * Handle form submission
   * Creates new city object and saves to database
   */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate required fields
    if (!cityName || !date) return;

    // Build new city object
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    // Save city and navigate back to cities list
    await createCity(newCity);
    navigate("/app/cities");
  }

  // Show loader while fetching location data
  if (isLoadingGeocoding) return <LoaderV2 />;

  // Prompt user to click on map if no coordinates
  if (!lat || !lng) return <div>Click somewhere on the map to add a city.</div>;

  // Show error if geocoding failed
  if (geocodingError) return <div>{geocodingError}</div>;

  return (
    <form
      className={`flex flex-col gap-4 bg-gray-500/55 rounded-xl mx-8 p-2 text-white overflow-scroll scrollbar-hide ${isLoadingCities ? "opacity-50 pointer-events-none grayscale-70" : ""} `}
      onSubmit={handleSubmit}
    >
      {/* City name input with flag emoji */}
      <div className="flex flex-col items-start mx-2 ">
        <label htmlFor="cityName" className="text-lg">
          City name
        </label>
        <div className="relative w-full">
          <input
            id="cityName"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            className="w-full bg-white rounded p-1.5 pr-8 text-black text-base"
          />
          {/* Display country flag emoji */}
          <span className="absolute right-2 top-2">{emoji}</span>
        </div>
      </div>

      {/* Date picker for trip date */}
      <div className="flex flex-col gap-1 items-start mx-2">
        <label htmlFor="date" className="text-lg">
          When did you go to {cityName}?
        </label>
        {/* Native date input (commented out) */}
        {/*<input
          id="date"
          onChange={(e: any) => setDate(e.target.value)}
          value={date as any}
          className="bg-white rounded p-1  text-black text-base w-full"
        /> */}

        {/* React DatePicker component */}
        <DatePicker
          id="date"
          onChange={(date: any) => setDate(date)}
          selected={date}
          dateFormat="MM/dd/yyyy"
          wrapperClassName="w-full"
          className="bg-white rounded p-1.5 text-black text-base w-full"
        />
      </div>

      {/* Notes textarea for trip details */}
      <div className="mx-2 flex flex-col gap-1 items-start">
        <label htmlFor="notes" className="text-xl">
          Notes about your trip to {cityName}
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="w-full h-32 p-1.5 bg-white rounded text-black text-sm "
        />
      </div>

      {/* Form action buttons */}
      <div className="flex justify-between">
        <Button type="primary" htmlType="submit">
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
