"use client";

import { useEffect, useState } from "react";

export const GeoLocation: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      setIsAvailable(true);
    }
  }, []);

  const onSuccess = (position: GeolocationPosition) => {
    setIsLoading(false);
    setPosition(position);
  };
  const onError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case GeolocationPositionError.PERMISSION_DENIED:
        setError(`PERMISSION_DENIED: ${error.message}`);
        break;
      case GeolocationPositionError.POSITION_UNAVAILABLE:
        setError(`POSITION_UNAVAILABLE: ${error.message}`);
        break;
      case GeolocationPositionError.TIMEOUT:
        setError(`TIMEOUT: ${error.message}`);
        break;
    }
  };

  // https://www.openstreetmap.org
  return (
    <div>
      {position && (
        <div>
          {`latitude: ${position?.coords.latitude}, longitude: ${position?.coords.longitude}`}
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      <button
        onClick={() => {
          if ("geolocation" in navigator) {
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
          }
        }}
        disabled={!isAvailable || isLoading}
      >
        {JSON.stringify(isLoading)}
      </button>
    </div>
  );
};
