import { Card, CardContent, Container, makeStyles } from "@material-ui/core";
import ExtraWeather from "./showWeather/extraWeather";
import MainWeather from "./showWeather/mainWeather";
import WeatherHeader from "./showWeather/weatherHeader";

import { WeatherContext } from "../contexts/weatherContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 800,
  },
  mainCard: {
    [theme.breakpoints.down("sm")]: {
      margin: 24,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 48,
      marginLeft: 96,
      marginBottom: 48,
    },
    borderRadius: 12,
  },
}));

const ShowWeather = () => {
  const classes = useStyles();

  const [weather, setWeather] = useContext(WeatherContext);

  return (
    <Container>
      {weather.temp ? (
        <Card variant="outlined" className={classes.mainCard}>
          <CardContent style={{ margin: 12 }}>
            {/* Main Weather Component */}
            <WeatherHeader />
            <MainWeather />
            <ExtraWeather />
          </CardContent>
        </Card>
      ) : null}
    </Container>
  );
};

export default ShowWeather;
