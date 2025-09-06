
import React, { useState } from "react";

const LocationStateFinder = () => {
  const [stateName, setStateName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);
    setStateName(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchStateFromCoordinates(latitude, longitude);
      },
      (err) => {
        setError("Permission denied or unable to retrieve location.");
        setLoading(false);
      }
    );
  };

  const fetchStateFromCoordinates = async (lat, lng) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'location-state-finder-app',
          'Accept-Language': 'en',
        },
      });
      const data = await response.json();

      if (data && data.address) {
        const state = data.address.state || data.address.region || null;
        if (state) {
          setStateName(state);
        } else {
          setError("State information not found at this location.");
        }
      } else {
        setError("Failed to fetch location info.");
      }
    } catch (err) {
      setError("Error fetching location info.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <button
        onClick={getCurrentLocation}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Get Current State
      </button>

      {loading && <p className="mt-4 text-gray-600">Loading location...</p>}

      {stateName && (
        <p className="mt-4 text-green-700 font-semibold">
          You are currently in: <span>{stateName}</span>
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-semibold">
          Error: {error}
        </p>
      )}
    </div>
  );
};

export default LocationStateFinder;