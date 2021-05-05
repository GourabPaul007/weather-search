import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Link,
  CssBaseline,
} from "@material-ui/core";
// import { MenuIcon } from "@material-ui/icons";     //Doesn't work
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";

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

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
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
          <Typography className={classes.title}></Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
