import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({
    lat: 33.44,
    lon: -94.04,
    timezone: "America/Chicago",
    timezone_offset: -18000,
    current: {
      dt: 1620188557,
      sunrise: 1620127480,
      sunset: 1620176463,
      temp: 288.27,
      feels_like: 287.85,
      pressure: 1017,
      humidity: 77,
      dew_point: 284.27,
      uvi: 0,
      clouds: 20,
      visibility: 10000,
      wind_speed: 4.12,
      wind_deg: 320,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
    },
  });

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
