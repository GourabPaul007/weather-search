import { Grid, Typography } from "@material-ui/core";

import Server from "../../../JsonServer.json";

const FirstRow = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Left Item */}
        <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
          <Grid style={{ marginRight: 12 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-droplet-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
              />
            </svg>
          </Grid>
          <Grid>
            <Typography>Humidity</Typography>
            <Typography>{Server.current.humidity}%</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center">
          <Grid style={{ marginRight: 12 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
            </svg>
          </Grid>
          <Grid>
            <Typography>Cloudiness</Typography>
            <Typography>{Server.current.clouds}%</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FirstRow;
