/**
 * Root Application Component
 *
 * Sets up the application routing structure and wraps the entire app with necessary providers:
 * - AuthProvider: Manages user authentication state
 * - CitiesProvider: Manages cities data and operations
 * - BrowserRouter: Enables client-side routing
 */
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { AuthProvider } from "./components/contexts/FakeAuthContext.tsx";
import { CitiesProvider } from "./components/contexts/CitiesContext.tsx";
import City from "./components/City.tsx";
import CityList from "./components/CityList.tsx";
import CountriesList from "./components/CountriesList.tsx";
import Form from "./components/Form.tsx";
import Homepage from "./pages/Homepage.tsx";
import Login from "./pages/Login.tsx";
import MainPage from "./pages/MainPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Pricing from "./pages/Pricing.tsx";
import Product from "./pages/Product.tsx";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";

/**
 * Main App component that defines all application routes:
 * - / : Homepage
 * - /product : Product information page
 * - /pricing : Pricing plans page
 * - /login : User login page
 * - /app : Main application (with nested routes for cities, countries, and form)
 * - /* : 404 page for undefined routes
 */
function App() {
  return (
    // Wrap entire app with authentication context
    <AuthProvider>
      {/* Wrap with cities data context */}
      <CitiesProvider>
        {/* Setup browser routing */}
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route index element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Main app route with nested children */}
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <MainPage />
                </ProtectedRoute>
              }
            >
              {/* Default redirect to cities list */}
              <Route index element={<Navigate replace to="cities" />} />
              {/* Cities routes */}
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              {/* Countries list route */}
              <Route path="countries" element={<CountriesList />} />
              {/* Add new city form route */}
              <Route path="form" element={<Form />} />
            </Route>

            {/* Authentication route */}
            <Route path="/login" element={<Login />} />

            {/* Catch-all route for 404 */}
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
