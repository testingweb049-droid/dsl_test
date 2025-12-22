"use client";

import { useRef, useEffect } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { SlLocationPin } from "react-icons/sl";
import useFormStore, { FieldType, FormDataType } from "@/stores/FormStore";
import { GOOGLE_MAPS_API_KEY } from "@/lib/config";

interface LocationInputProps {
  field: keyof FormDataType;
  label?: string;
  placeholder: string;
  index?: number; 
  isStop?: boolean;
  onAddStop?: () => void;
  onRemoveStop?: () => void;
  showAddButton?: boolean;
}

export default function LocationInput({
  field,
  label,
  placeholder,
  index,
}: LocationInputProps) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null);
  const { formData, setFormData } = useFormStore();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded && !placesServiceRef.current) {
      const dummyDiv = document.createElement("div");
      placesServiceRef.current = new google.maps.places.PlacesService(dummyDiv);
    }
  }, [isLoaded]);

  const formatAddress = (place: google.maps.places.PlaceResult): string => {
    // Build address in format: Place Name, Street Address, City, Country (no postal code, no neighborhood)
    let address = "";
    
    if (place.address_components && place.name) {
      // Get place name
      const placeName = place.name;
      
      // Get street address components
      const streetNumber = place.address_components.find(
        (comp) => comp.types.includes("street_number")
      )?.long_name;
      const route = place.address_components.find(
        (comp) => comp.types.includes("route")
      )?.long_name;
      
      // Get city (locality or administrative_area_level_1 for airports)
      const locality = place.address_components.find(
        (comp) => comp.types.includes("locality")
      )?.long_name;
      
      // For airports, sometimes they don't have locality, so check for sublocality or administrative_area_level_1
      const sublocality = place.address_components.find(
        (comp) => comp.types.includes("sublocality") || comp.types.includes("sublocality_level_1")
      )?.long_name;
      
      const administrativeArea = place.address_components.find(
        (comp) => comp.types.includes("administrative_area_level_1")
      )?.long_name;
      
      // Get city - prefer locality, fallback to sublocality or administrative area
      const city = locality || sublocality || administrativeArea || "";
      
      // Get country
      const country = place.address_components.find(
        (comp) => comp.types.includes("country")
      )?.long_name;
      
      // Build street address (number + route) - only if both exist
      const streetAddress = [streetNumber, route].filter(Boolean).join(" ");
      
      // Build final address: Place Name, Street Address (if exists), City, Country
      const addressParts: string[] = [];
      
      // Add place name
      if (placeName) {
        addressParts.push(placeName);
      }
      
      // Add street address only if it exists (for airports, this might be empty)
      if (streetAddress && streetAddress.trim()) {
        addressParts.push(streetAddress);
      }
      
      // Add city only if it exists
      if (city && city.trim()) {
        addressParts.push(city);
      }
      
      // Add country only if it exists
      if (country && country.trim()) {
        addressParts.push(country);
      }
      
      // Join with proper spacing and commas
      address = addressParts.join(", ");
      
      // Clean up any double spaces or commas
      address = address.replace(/\s+/g, " ").trim();
      address = address.replace(/,\s*,/g, ","); // Remove double commas
      address = address.replace(/,\s*$/, ""); // Remove trailing comma
    } else {
      // Fallback: clean formatted_address to remove postal codes and neighborhoods
      address = place.formatted_address || place.name || "";
      
      // Remove postal codes (5 digits or 5+4 format)
      address = address.replace(/,\s*\d{5}(-\d{4})?\s*/g, ", ");
      address = address.replace(/\s+\d{5}(-\d{4})?\s*/g, " ");
      
      // Remove neighborhood names like "Extramurs"
      address = address.replace(/,\s*Extramurs,?/gi, ",");
      
      // Clean up spacing
      address = address.replace(/\s+/g, " ").trim();
      address = address.replace(/,\s*,/g, ","); // Remove double commas
      address = address.replace(/,\s*$/, "").trim(); // Remove trailing comma and whitespace
    }
    
    return address;
  };

  const handlePlaceChanged = () => {
    const autocomplete = autocompleteRef.current;
    if (!autocomplete) return;
    const place = autocomplete.getPlace();
    
    if (!place.geometry?.location) return;
    
    const coords = `${place.geometry.location.lat()},${place.geometry.location.lng()}`;
    
    // If place has place_id and we need more details (address_components might be missing), fetch full details
    if (place.place_id && placesServiceRef.current && (!place.address_components || place.address_components.length === 0)) {
      placesServiceRef.current.getDetails(
        {
          placeId: place.place_id,
          fields: ["name", "formatted_address", "geometry", "address_components"],
        },
        (detailedPlace, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && detailedPlace) {
            const address = formatAddress(detailedPlace);
            if (address) {
              setFormData(field, address, coords, index);
            }
          } else {
            // Fallback to basic formatting
            const address = formatAddress(place);
            if (address) {
              setFormData(field, address, coords, index);
            }
          }
        }
      );
    } else {
      // Use existing place data
      const address = formatAddress(place);
      if (address) {
        setFormData(field, address, coords, index);
      }
    }
  };

  const handleInputChange = (value: string) => {
    setFormData(field, value, "",index);
  };
  
  const fieldData =
     field === "stops" 
      ? formData.stops[index!]
      : (formData[field as keyof FormDataType] as FieldType<string>);

     

  return (
    <div className="relative flex items-center gap-3 w-full">
      

      {/* Input */}
      {!isLoaded ? (
        <div className="flex flex-col gap-1 w-full">
          {label && <div className="text-sm font-semibold text-gray-700">{label}</div>}
        <div className="relative flex-1">
          <SlLocationPin className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            placeholder="Loading..."
            className="w-full pl-8 md:pl-10 pr-2 md:pr-3 py-2 md:py-2.5 border border-gray-300 rounded-lg text-gray-500 bg-gray-50 cursor-not-allowed"
            />
        </div>
            </div>
      ) : (
        <div className="flex flex-col gap-1 w-full">
        {label &&  <div className="text-sm font-semibold text-gray-700">{label}</div> }
        <Autocomplete
          onLoad={(auto) => (autocompleteRef.current = auto)}
          onPlaceChanged={handlePlaceChanged}
          options={{ componentRestrictions: { country: "usa" } }}
          className={`w-full `}
        >
          <div className="relative flex-1 w-full">
            <SlLocationPin className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={fieldData?.value || ""}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={placeholder}
              className={`w-full pl-8 md:pl-10 pr-2 md:pr-3 py-2 md:py-2.5 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4910B] text-black text-base bg-white ${fieldData.error ? ' border-red-500' : 'border-gray-300'} `}
            />
          </div>
        </Autocomplete>
        </div>
      )}

    </div>
  );
}
