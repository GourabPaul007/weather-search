import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [temp, setTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [humidity, setHumidity] = useState("");
  const [cloudiness, setCloudiness] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [description, setDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  return (
    <WeatherContext.Provider
      value={{
        tempValue: [temp, setTemp],
        windSpeedValue: [windSpeed, setWindSpeed],
        windDegValue: [windDeg, setWindDeg],
        humidityValue: [humidity, setHumidity],
        cloudinessValue: [cloudiness, setCloudiness],
        sunriseValue: [sunrise, setSunrise],
        sunsetValue: [sunset, setSunset],
        descriptionValue: [description, setDescription],
        feelsLikeValue: [feelsLike, setFeelsLike],
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
