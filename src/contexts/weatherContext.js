import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [humidity, setHumidity] = useState("");
  const [cloudiness, setCloudiness] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [description, setDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  const [weather, setWeather] = useState({
    main: "",
    date: "",
    temp: "",
    windSpeed: "",
    windDeg: "",
    humidity: "",
    cloudiness: "",
    sunrise: "",
    sunset: "",
    description: "",
    feelsLike: "",
  });

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
