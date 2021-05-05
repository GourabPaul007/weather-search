import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import Navbar from "./components/navbar";
import ShowWeather from "./components/showWeather";
import Forecast from "./components/forecast";

const useStyles = makeStyles((theme) => ({
  mainCards: {
    margin: 24,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
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

export default App;
