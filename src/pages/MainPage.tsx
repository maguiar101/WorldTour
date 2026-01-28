/**
 * MainPage Component
 *
 * Main application page (authenticated area)
 * Layout:
 * - Sidebar (left): Logo, navigation, city/country lists
 * - Map (right): Interactive map with markers
 * - User component: Floating user info and logout
 */
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

function MainPage() {
  return (
    <div className="h-[calc(100vh-2.5rem)] flex text-center m-5 text-4xl">
      {/* Left sidebar with lists and navigation */}
      <Sidebar />

      {/* Interactive map */}
      <Map />

      {/* User info and logout (floating) */}
      <User />
    </div>
  );
}

export default MainPage;
