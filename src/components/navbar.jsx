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
  MenuItem,
  Select,
} from "@material-ui/core";
// import { MenuIcon } from "@material-ui/icons";     //Doesn't work
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import axios from "axios";

import { LocationContext } from "../contexts/locationContext";
import { WeatherContext } from "../contexts/weatherContext";

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
  const { locationValue, latValue, lonValue } = useContext(LocationContext);
  const [location, setLocation] = locationValue;
  const [lat, setLat] = latValue;
  const [lon, setLon] = lonValue;

  //getting weather context
  const {
    tempValue,
    windSpeedValue,
    windDegValue,
    humidityValue,
    cloudinessValue,
    sunriseValue,
    sunsetValue,
    descriptionValue,
    feelsLikeValue,
  } = useContext(WeatherContext);
  const [temp, setTemp] = tempValue;
  const [windSpeed, setWindSpeed] = windSpeedValue;
  const [windDeg, setWindDeg] = windDegValue;
  const [humidity, setHumidity] = humidityValue;
  const [cloudiness, setCloudiness] = cloudinessValue;
  const [sunrise, setSunrise] = sunriseValue;
  const [sunset, setSunset] = sunsetValue;
  const [description, setDescription] = descriptionValue;
  const [feelsLike, setFeelsLike] = feelsLikeValue;

  //getting ip and address data of user on start of the application
  useEffect(async () => {
    const data = await axios.get("http://ip-api.com/json");
    setLocation(`${data.data.city},${data.data.regionName}`);
    setLat(data.data.lat);
    setLon(data.data.lon);
    //-------------------
    let Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=92d4fe58fd19b2bfd859485342be9dde`;
    const weatherJson = await axios.get(Url);
    console.log(weatherJson.data);
    setStateData(weatherJson);
  }, [lat, lon]);

  // Geocoding the latitude & longitude from cityname with mapbox api
  const searchCity = async () => {
    const mapboxToken =
      "pk.eyJ1IjoiZ291cmFiLXBhdWwiLCJhIjoiY2tvYmE2MWRsMDRtMDJ1bXFtNmFsdWdpZyJ9.nyRM24alI7SC47EXCwBzrw";
    const geoCoder = mbxGeocoding({ accessToken: mapboxToken });
    const geoData = await geoCoder.forwardGeocode({ query: `${location}`, limit: 1 }).send();
    setLat(geoData.body.features[0].geometry.coordinates[1]);
    setLon(geoData.body.features[0].geometry.coordinates[0]);
  };

  const searchWeather = async (e) => {
    e.preventDefault();
    await searchCity();
    let Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=92d4fe58fd19b2bfd859485342be9dde`;
    const weatherJson = await axios.get(Url);
    setStateData(weatherJson);
  };
  //for setting the state data aquired from useEffect or searchweather
  const setStateData = (weatherJson) => {
    setTemp(weatherJson.data.current.temp);
    setWindSpeed(weatherJson.data.current.wind_speed);
    setWindDeg(weatherJson.data.current.wind_deg);
    setHumidity(weatherJson.data.current.humidity);
    setCloudiness(weatherJson.data.current.clouds);
    setSunrise(weatherJson.data.current.sunrise);
    setSunset(weatherJson.data.current.sunset);
    setDescription(weatherJson.data.current.weather[0].description);
    setFeelsLike(weatherJson.data.current.feels_like);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <WbSunnyRoundedIcon style={{ marginRight: 5 }} />
          <Link
            href="/"
            underline="none"
            color="inherit"
            target="_self"
            onClick={(e) => e.preventDefault}
          >
            <Typography variant="h6">Weather</Typography>
          </Link>
          {/* For Spacing in middle */}
          <Typography style={{ flexGrow: 5 }}></Typography>
          <form onSubmit={searchWeather}>
            {" "}
            {/*<form onSubmit={searchCity}> */}
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
