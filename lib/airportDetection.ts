/**
 * List of airports we serve - must match the airports in AirpportsWeServe.tsx
 * Includes various name variations and codes for better detection
 */
export const SERVED_AIRPORTS = [
  // Newark Airport variations
  "NEWARK AIRPORT",
  "NEWARK LIBERTY",
  "NEWARK LIBERTY INTERNATIONAL",
  "NEWARK",
  "EWR",
  // Teterboro Airport variations
  "TETERBORO AIRPORT",
  "TETERBORO",
  "TEB",
  // Westchester County Airport variations
  "WESTCHESTER COUNTY",
  "WESTCHESTER COUNTY AIRPORT",
  "WESTCHESTER",
  "HPN",
  // JFK Airport variations
  "JOHN F. KENNEDY",
  "JOHN F. KENNEDY AIRPORT",
  "JOHN F. KENNEDY INTERNATIONAL",
  "JFK",
  "JFK AIRPORT",
  "JFK INTERNATIONAL",
  "KENNEDY",
  "KENNEDY AIRPORT",
  // LaGuardia Airport variations
  "LAGUARDIA AIRPORT",
  "LAGUARDIA",
  "LGA",
  "LGA AIRPORT",
];

/**
 * Check if a location string contains any airport name
 * @param location - The location string to check
 * @returns true if location contains an airport, false otherwise
 */
export function isAirportLocation(location: string): boolean {
  if (!location || typeof location !== "string") {
    return false;
  }

  const locationUpper = location.toUpperCase();

  // Check if any airport name is found in the location string
  return SERVED_AIRPORTS.some((airport) => {
    // Check for exact airport name or airport code
    return locationUpper.includes(airport);
  });
}

/**
 * Check if any location in the form contains an airport
 * @param fromLocation - Pickup location
 * @param toLocation - Dropoff location
 * @param stops - Array of stop locations
 * @returns true if any location contains an airport
 */
export function hasAirportInLocations(
  fromLocation: string,
  toLocation: string,
  stops: string[]
): boolean {
  // Check pickup location
  if (isAirportLocation(fromLocation)) {
    return true;
  }

  // Check dropoff location
  if (isAirportLocation(toLocation)) {
    return true;
  }

  // Check all stops
  if (stops && Array.isArray(stops)) {
    return stops.some((stop) => {
      const stopValue = typeof stop === "string" ? stop : (stop as any)?.value || "";
      return isAirportLocation(stopValue);
    });
  }

  return false;
}

