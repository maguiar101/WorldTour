/**
 * useURLPosition Custom Hook
 * 
 * Extracts latitude and longitude from URL search parameters
 * Useful for syncing map position with URL state
 * 
 * @returns [lat, lng] - Array containing latitude and longitude strings from URL
 *                       Returns null for each if not present in URL
 */
import { useSearchParams } from "react-router-dom";

export function useURLPosition() {
    // Get search parameters from current URL
    const [searchParams] = useSearchParams();
    
    // Extract lat and lng from URL parameters
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return [lat, lng];
}