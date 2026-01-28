/**
 * CityList Component
 *
 * Displays a list of all visited cities
 * Shows loading state while fetching data
 * Displays message if no cities have been added yet
 */
import CityItem from "./CityItem.tsx";
import LoaderV2 from "./Loader/LoaderV2.tsx";
import { useCities } from "./contexts/CitiesContext.tsx";

function CityList() {
  // Get cities data and loading state from context
  const { cities, isLoading } = useCities();

  // Show loader while fetching cities
  if (isLoading) return <LoaderV2 />;

  // Show welcome message if no cities exist
  if (!cities.length) return <p>👋 Add your first City on the Map!</p>;

  // Render list of cities
  return (
    <ul className="flex flex-col gap-2">
      {cities.map((city: any) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
