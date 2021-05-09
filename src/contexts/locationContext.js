import React, { useState, createContext } from "react";

export const LocationContext = createContext();

//LocationProvider need to be uppercase & need to have props
export const LocationProvider = (props) => {
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  return (
    <LocationContext.Provider
      value={{
        locationValue: [location, setLocation],
        latValue: [lat, setLat],
        lonValue: [lon, setLon],
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
