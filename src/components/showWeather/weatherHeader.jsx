import { Typography } from "@material-ui/core";

import { useContext, useState } from "react";

import { LocationContext } from "../../contexts/locationContext";

const WeatherHeader = () => {
  const { locationValue } = useContext(LocationContext);
  const [location, setLocation] = locationValue;

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
    </>
  );
};

export default WeatherHeader;
