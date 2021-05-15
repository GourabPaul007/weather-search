import React, { createContext, useState } from "react";

export const ForecastContext = createContext();

export const ForecastProvider = (props) => {
  const [forecastData, setForecastData] = useState([
    {
      i: "",
      forecastDaily: "",
      forecastDateTime: "",
      forecastDayTemp: "",
      forecastNightTemp: "",
      forecastHumidity: "",
      forecastCloudiness: "",
    },
  ]);

  return (
    <ForecastContext.Provider value={[forecastData, setForecastData]}>
      {props.children}
    </ForecastContext.Provider>
  );
};
