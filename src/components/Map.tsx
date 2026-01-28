/**
 * Map Component
 *
 * Interactive map displaying all visited cities
 * Features:
 * - Leaflet map with markers for each city
 * - Click to add new city (navigates to form)
 * - Get user's current location button
 * - Auto-centers based on URL parameters or geolocation
 * - Popups showing city details on marker click
 */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "./Button.tsx";
import { useCities } from "./contexts/CitiesContext.tsx";
import { useGeolocation } from "./hooks/useGeolocation.ts";
import { useURLPosition } from "./hooks/useURLPosition.ts";

function Map() {
  // Get cities data from context
  const { cities } = useCities();

  // Map position state - default to coordinates (34, -79)
  const [mapPosition, setMapPosition] = useState<[number, number]>([34, -79]);

  // Geolocation hook for getting user's current position
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  // Get map coordinates from URL parameters
  const [mapLat, mapLng] = useURLPosition();

  /**
   * Update map position when URL coordinates change
   * This happens when user clicks on a city or adds a new one
   */
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([Number(mapLat), Number(mapLng)]);
    },
    [mapLat, mapLng],
  );

  /**
   * Update map position when geolocation data is available
   * Centers map on user's current location
   */
  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition],
  );

  return (
    <div className="flex-1 h-full relative">
      {/* "Get My Location" button - shown when geolocation not yet obtained */}
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Get My Location"}
        </Button>
      )}

      {/* Leaflet map container */}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full rounded-r-2xl max-sm:rounded-l-2xl"
      >
        {/* Map tiles from OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* Render a marker for each city */}
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        {/* Helper component to change map center */}
        <ChangeCenter position={mapPosition} />

        {/* Helper component to detect map clicks */}
        <DetectClick />
      </MapContainer>
    </div>
  );
}

/**
 * Helper component to programmatically change map center
 * Uses Leaflet's setView method
 */
function ChangeCenter({ position }: { position: [number, number] }) {
  const map = useMap();
  map.setView(position);
  return null;
}

/**
 * Helper component to detect clicks on the map
 * Navigates to form page with clicked coordinates
 */
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default Map;
