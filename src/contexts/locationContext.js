import React, { useState, createContext } from "react";

export const LocationContext = createContext();

//LocationProvider need to be uppercase & need to have props
export const LocationProvider = (props) => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  return (
    <LocationContext.Provider
      value={{
        locationValue: [location, setLocation],
        latValue: [latitude, setLatitude],
        lonValue: [longitude, setLongitude],
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
