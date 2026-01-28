/**
 * Sidebar Component
 *
 * Left sidebar for the main application
 * Contains:
 * - Logo
 * - Navigation tabs (Cities/Countries)
 * - Outlet for nested routes (CityList, CountriesList, City, Form)
 * - Footer with copyright
 */
import AppNav from "./AppNav.tsx";
import Logo from "./Logo.tsx";
import { Outlet } from "react-router";

function Sidebar() {
  return (
    <div className="bg-black/35 flex flex-col gap-8 rounded-l-2xl h-full w-[35%] max-lg:w-[40%] max-sm:hidden pt-2 transition-all duration-300">
      {/* Logo at top of sidebar */}
      <Logo
        divClass={"justify-center"}
        imgClass={"max-sm:w-15 max-sm:h-15"}
        textClass={
          "max-md:text-lg max-sm:text-base transition-all duration-300"
        }
      />

      {/* Navigation tabs */}
      <AppNav />

      {/* Outlet renders nested route components (CityList, CountriesList, etc.) */}
      <Outlet />

      {/* Footer with copyright */}
      <footer className="text-white/55 text-sm mt-auto m-4">
        &copy; {new Date().getFullYear()} World Tour. All rights reserved.
      </footer>
    </div>
  );
}

export default Sidebar;
