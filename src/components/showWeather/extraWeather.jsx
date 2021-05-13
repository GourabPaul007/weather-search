import { Card, CardContent, makeStyles, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";

import { WeatherContext } from "../../contexts/weatherContext";

import { timeConverter } from "../../utils/DateTime";

const useStyles = makeStyles({
  hr: {
    height: "1px",
    color: "#BDBDBD",
    backgroundColor: "#555",
    border: "none",
  },
});

const ExtraWeather = () => {
  //getting weather context
  const [weather, setWeather] = useContext(WeatherContext);

  const classes = useStyles();
  return (
    <>
      <Card variant="outlined" style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container spacing={3}>
            {/* Left Item */}
            <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
              <Grid style={{ marginRight: 12 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-droplet-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                  />
                </svg>
              </Grid>
              <Grid>
                <Typography>Humidity</Typography>
                <Typography>{weather.humidity}%</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
              <Grid style={{ marginRight: 12 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cloud-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>
              </Grid>
              <Grid>
                <Typography>Cloudiness</Typography>
                <Typography>{weather.cloudiness}%</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* ========================================================================================== */}
          <hr className={classes.hr} />
          {/* ========================================================================================== */}
          <Grid container spacing={3}>
            <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
              <Grid style={{ marginRight: 12 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sun-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </Grid>
              <Grid>
                <Typography>Sunrise</Typography>
                <Typography>{timeConverter(weather.sunrise)}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
              <Grid style={{ marginRight: 12 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
              </Grid>
              <Grid>
                <Typography>Sunset</Typography>
                <Typography>{timeConverter(weather.sunset)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ExtraWeather;
