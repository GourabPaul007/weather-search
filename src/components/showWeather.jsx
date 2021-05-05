import { Card, CardContent, Container, makeStyles } from "@material-ui/core";
import ExtraWeather from "./showWeather/extraWeather";
import MainWeather from "./showWeather/mainWeather";
import WeatherHeader from "./showWeather/weatherHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 800,
  },
  mainCard: {
    [theme.breakpoints.down("sm")]: {
      margin: 24,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 24,
      marginRight: 24,
      marginBottom: 24,
    },
  },
}));

const ShowWeather = () => {
  const classes = useStyles();
  return (
    <Container>
      <Card variant="outlined" className={classes.mainCard}>
        <CardContent style={{ margin: 12 }}>
          {/* Main Weather Component */}
          <WeatherHeader />
          <MainWeather />
          <ExtraWeather />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowWeather;
