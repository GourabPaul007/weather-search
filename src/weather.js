import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

import ShowWeather from "./components/showWeather";
import Forecast from "./components/forecast";

const Weather = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container>
          <Grid item xs={12} sm={8}>
            <ShowWeather />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Forecast />
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
};

export default Weather;
