/**
 * Cities Context Provider
 *
 * Manages global state for cities data including:
 * - Fetching cities from API
 * - Loading individual city details
 * - Creating new cities
 * - Deleting cities
 *
 * Uses useReducer for complex state management with actions:
 * - loading: Set loading state
 * - cities/loaded: Load all cities
 * - city/loaded: Load single city
 * - city/created: Add new city
 * - city/deleted: Remove city
 * - rejected: Handle errors
 */
import { createContext, useContext, useEffect, useReducer } from "react";

// Type definition for a City object
interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

// Type definition for the context props
interface createContextProps {
  cities: any[];
  isLoading: boolean;
  currentCity: City | null;
  getCity: any;
  createCity: any;
  deleteCity: any;
  error?: string;
}

// Fake API URL for development (json-server)
const URL = "http://localhost:8000";

// Create the Cities context
const CitiesContext = createContext<createContextProps | undefined>(undefined);

// Initial state for the reducer
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: null,
};

/**
 * Reducer function to manage cities state
 * Handles all state updates based on action type
 */
function reducer(state: any, action: any) {
  switch (action.type) {
    // Set loading state to true
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    // Load all cities from API
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    // Load a single city's details
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    // Add newly created city to the list
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    // Remove deleted city from the list
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city: any) => city.id !== action.payload),
        currentCity: null,
      };

    // Handle API errors
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
}

/**
 * CitiesProvider component
 * Wraps children with cities context and provides access to cities data and operations
 */
function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  // Fetch all cities on component mount
  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  /**
   * Fetch a single city by ID
   * Skips fetch if city is already loaded
   */
  async function getCity(id: any) {
    // Optimization: don't fetch if already loaded
    if (currentCity && Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  }

  /**
   * Create a new city
   * Sends POST request to API and updates local state
   */
  async function createCity(newCity: any) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city...",
      });
    }
  }

  /**
   * Delete a city by ID
   * Sends DELETE request to API and updates local state
   */
  async function deleteCity(id: any) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  }

  // Provide cities data and operations to children components
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

/**
 * Custom hook to access cities context
 * Throws error if used outside of CitiesProvider
 */
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
