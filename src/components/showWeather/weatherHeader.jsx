import { Typography } from "@material-ui/core";

import { useState } from "react";

const WeatherHeader = () => {
  const [location, setLocation] = useState("kolkata");

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
          {/* - {location} */}
        </Typography>
      </Typography>
    </>
  );
};

export default WeatherHeader;
