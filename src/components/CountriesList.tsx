/**
 * CountriesList Component
 *
 * Displays a unique list of countries visited
 * Extracts unique countries from cities data
 * Shows each country with its flag emoji
 */
import CountryItem from "./CountryItem.tsx";
import Loader from "./Loader/Loader.tsx";
import { useCities } from "./contexts/CitiesContext.tsx";

function CountriesList() {
  // Get cities data and loading state from context
  const { cities, isLoading } = useCities();

  // Show loader while fetching data
  if (isLoading) return <Loader />;

  // Show welcome message if no cities exist
  if (!cities.length) return <p>👋 Add your first City on the Map!</p>;

  /**
   * Extract unique countries from cities array
   * Uses reduce to create a new array with unique country/emoji combinations
   */
  const countries = cities.reduce((arr: any, city: any) => {
    // Check if country already exists in the accumulated array
    if (!arr.map((el: any) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // Render grid of country cards
  return (
    <ul className="grid grid-flow-col grid-rows-2 gap-4 w-full overflow-x-auto p-4 scrollbar-hide">
      {countries.map((country: any) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
