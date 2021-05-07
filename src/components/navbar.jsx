import React, { useState } from "react";
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
// import { MenuIcon } from "@material-ui/icons";     //Doesn't work
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

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
  const searchCity = async (e) => {
    e.preventDefault();
    const mapboxToken =
      "pk.eyJ1IjoiZ291cmFiLXBhdWwiLCJhIjoiY2tvYmE2MWRsMDRtMDJ1bXFtNmFsdWdpZyJ9.nyRM24alI7SC47EXCwBzrw";
    const geoCoder = mbxGeocoding({ accessToken: mapboxToken });
    const geoData = await geoCoder.forwardGeocode({ query: `${location}`, limit: 1 }).send();
    console.log(geoData.body.features[0].geometry.coordinates);
  };

  const classes = useStyles();
  const [location, setLocation] = useState("kolkata");
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
          <form onSubmit={searchCity}>
            <TextField
              variant="standard"
              placeholder="City Name"
              value={location}
              onChange={location}
            />
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
