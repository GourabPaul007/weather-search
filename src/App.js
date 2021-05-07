import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { orange, lightBlue, deepOrange, deepPurple, pink, purple } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Weather from "./weather";

import Navbar from "./components/navbar";

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? pink[700] : lightBlue[500];
  const mainSecondaryColor = darkState ? purple[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className="App">
          <Navbar darkState={darkState} handleThemeChange={handleThemeChange} />
          <Weather />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
