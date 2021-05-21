import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Humidity = ({ singleDay }) => {
  return (
    <>
      <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
        <Grid style={{ marginRight: 12 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-droplet-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
            />
          </svg>
        </Grid>
        <Grid>
          <Typography>Humidity</Typography>
          <Typography>{singleDay.forecastHumidity}%</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Humidity;