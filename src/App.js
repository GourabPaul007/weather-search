import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { lightBlue, pink, purple, deepPurple } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Weather from "./weather";
import Navbar from "./components/navbar";

import { WeatherProvider } from "./contexts/weatherContext";
import { LocationProvider } from "./contexts/locationContext";
import { ForecastProvider } from "./contexts/forecastContext";

const App = () => {
  const [darkState, setDarkState] = useState(
    Boolean(JSON.parse(localStorage.getItem("darkTheme"))) || false
  );
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? pink[700] : lightBlue[500];
  const mainSecondaryColor = darkState ? purple[500] : deepPurple[500];
  const darkTheme = useMemo(() =>
    createMuiTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor,
        },
        secondary: {
          main: mainSecondaryColor,
        },
      },
      typography: {
        fontFamily: ["Roboto", "Arial", "sans-serif", "-apple-system"],
      },
    })
  );

  //this was tricky, got me 2 hours and brain tumor
  const handleThemeChange = () => {
    setDarkState((darkState) => !darkState);
    localStorage.setItem("darkTheme", JSON.stringify(!darkState));
  };

  return (
    //Didn't wrap this, wasted 1 hour, felt like an idiot
    <LocationProvider>
      <ForecastProvider>
        <WeatherProvider>
          <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
              <div className="App">
                <Navbar darkState={Boolean(darkState)} handleThemeChange={handleThemeChange} />
                <Weather />
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </WeatherProvider>
      </ForecastProvider>
    </LocationProvider>
  );
};

export default App;
