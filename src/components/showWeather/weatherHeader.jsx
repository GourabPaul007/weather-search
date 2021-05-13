import { Typography } from "@material-ui/core";

import { useContext } from "react";

import { LocationContext } from "../../contexts/locationContext";
import { WeatherContext } from "../../contexts/weatherContext";

import { getDate } from "../../utils/DateTime";

const WeatherHeader = () => {
  const { locationValue } = useContext(LocationContext);
  const [location, setLocation] = locationValue;

  const [weather, setWeather] = useContext(WeatherContext);

  // const date = weather.date;

  return (
    <>
      <Typography variant="h4" style={{ fontWeight: 600, marginBottom: 48 }}>
        Weather today{" "}
        <Typography
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            fontSize: 20,
          }}
        >
          - {location}
        </Typography>
      </Typography>
      <Typography>{getDate(weather.date)}</Typography>
    </>
  );
};

export default WeatherHeader;
