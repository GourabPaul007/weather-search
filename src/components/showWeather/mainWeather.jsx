import { Typography, Grid } from "@material-ui/core";
import Server from "../../JsonServer.json";
import { iconPicker } from "../../utils/iconPicker";
import { windDirectionConverter } from "../../utils/windDirectionConverter";

const MainWeather = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
          <Typography variant="h3" style={{ fontWeight: 600 }}>
            {Math.round(Server.current.temp - 270)}° {iconPicker(Server.current.weather[0].main)}{" "}
            {/*                         wasted 1 hr                          ^*/}
          </Typography>
        </Grid>
        <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
          <Grid style={{ marginRight: 12 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-wind"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </Grid>
          <Grid>
            <Typography>Wind</Typography>
            <Typography>
              {" "}
              {windDirectionConverter(Server.current.wind_deg)} {Server.current.wind_speed} m/s
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} container direction="row" justify="flex-start" alignItems="center">
          <Typography>
            {Server.current.weather[0].description}. Temperature feels like{" "}
            {Math.round(Server.current.feels_like - 270)}°. Winds{" "}
            {windDirectionConverter(Server.current.wind_deg)} at {Server.current.wind_speed} m/s
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MainWeather;
