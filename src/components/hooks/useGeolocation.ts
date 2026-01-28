/**
 * useGeolocation Custom Hook
 * 
 * Provides access to browser's geolocation API
 * Returns:
 * - isLoading: Boolean indicating if geolocation is being fetched
 * - error: Error message if geolocation fails
 * - position: Current position {lat, lng} or null
 * - getPosition: Function to trigger geolocation request
 * 
 * @param defaultPosition - Optional default position to use initially
 */
import { useState } from "react";

// Type definition for position object
type Position = {
  lat: number;
  lng: number;
};

export function useGeolocation(defaultPosition: Position | null = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [position, setPosition] = useState<Position | null>(defaultPosition);

  /**
   * Request user's current position using browser geolocation API
   * Handles success and error cases
   */
  function getPosition() {
    // Check if browser supports geolocation
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    
    // Request current position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Success callback - set position
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        // Error callback - set error message
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  
  return { isLoading, error, position, getPosition };
}
