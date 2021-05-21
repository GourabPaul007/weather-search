import React, { useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Link,
  CssBaseline,
  Switch,
  TextField,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import axios from "axios";

import { LocationContext } from "../contexts/locationContext";
import { WeatherContext } from "../contexts/weatherContext";
import { ForecastContext } from "../contexts/forecastContext";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 20,
  },
  button: {
    margin: 10,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  //getting location context
  const { locationValue } = useContext(LocationContext);
  const [location, setLocation] = locationValue;

  //getting weather context
  const [weather, setWeather] = useContext(WeatherContext);

  //getting forecast context
  const [forecastData, setForecastData] = useContext(ForecastContext);

  //getting ip and address data of user on start of the application
  // old apis -> http://ip-api.com/json
  useEffect(async () => {
    const data = await axios.get("https://ipapi.co/json");
    setLocation(`${data.data.city},${data.data.region}`);
    let Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.data.latitude}&lon=${data.data.longitude}&exclude=minutely&appid=92d4fe58fd19b2bfd859485342be9dde`;
    const weatherJson = await axios.get(Url);
    setStateData(weatherJson);
  }, []);

  // Geocoding the latitude & longitude from cityname with mapbox api
  const searchCity = async () => {
    const mapboxToken =
      "pk.eyJ1IjoiZ291cmFiLXBhdWwiLCJhIjoiY2tvYmE2MWRsMDRtMDJ1bXFtNmFsdWdpZyJ9.nyRM24alI7SC47EXCwBzrw";
    const geoCoder = mbxGeocoding({ accessToken: mapboxToken });
    console.log(location);
    const geoData = await geoCoder.forwardGeocode({ query: location, limit: 1 }).send();
    return [
      geoData.body.features[0].geometry.coordinates[1],
      geoData.body.features[0].geometry.coordinates[0],
    ];
  };

  const searchWeather = React.useMemo(
    () => async (e) => {
      e.preventDefault();
      console.log("fetching data");
      //to prevent forecast data from over stacking when user searches with text
      // await setWeather({});
      await setForecastData([
        {
          forecastDayTemp: null,
        },
      ]);
      const [lat, lon] = await searchCity();
      let Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=92d4fe58fd19b2bfd859485342be9dde`;
      const weatherJson = await axios.get(Url);
      setStateData(weatherJson);
    },
    [location]
  );

  // for setting the state data aquired from useEffect or searchweather
  const setStateData = (weatherJson) => {
    // setting State pf Main Weather Data
    setWeather({
      main: weatherJson.data.current.weather[0].main,
      temp: weatherJson.data.current.temp,
      windSpeed: weatherJson.data.current.wind_speed,
      windDeg: weatherJson.data.current.wind_deg,
      humidity: weatherJson.data.current.humidity,
      cloudiness: weatherJson.data.current.clouds,
      sunrise: weatherJson.data.current.sunrise,
      sunset: weatherJson.data.current.sunset,
      description: weatherJson.data.current.weather[0].description,
      feelsLike: weatherJson.data.current.feels_like,
    });
    //setting state of forecast data
    for (let i = 1; i < 7; i++) {
      setForecastData((forecastData) => [
        //I NEED TO PASS STATE AS ARGUMENT FFS, WASTED 5 HOURS
        ...forecastData,
        {
          i: i,
          forecastMain: weatherJson.data.daily[i].weather[0].main.toString(),
          forecastDateTime: weatherJson.data.daily[i].dt.toString(), //for weekday
          forecastDayTemp: weatherJson.data.daily[i].temp.day.toFixed(2).toString(),
          forecastNightTemp: weatherJson.data.daily[i].temp.night.toFixed(2).toString(),
          forecastHumidity: weatherJson.data.daily[i].humidity.toString(),
          forecastCloudiness: weatherJson.data.daily[i].clouds.toString(),
        },
      ]);
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <WbSunnyRoundedIcon style={{ marginRight: 5 }} />
          <Link
            href="#"
            underline="none"
            color="inherit"
            target="_self"
            onClick={(e) => e.preventDefault}
          >
            <Typography style={{ marginRight: 20 }} variant="h6">
              Weather
            </Typography>
          </Link>
          {/* For Spacing in middle */}
          <Typography style={{ flexGrow: 5 }}></Typography>
          <form onSubmit={searchWeather}>
            <TextField
              variant="standard"
              placeholder="City Name"
              value={location}
              onChange={(e) => setLocation(e.target.value)} //HUH...
            ></TextField>
          </form>
          <Typography style={{ flexGrow: 1 }}></Typography>
          <Switch checked={props.darkState} onChange={props.handleThemeChange} />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
