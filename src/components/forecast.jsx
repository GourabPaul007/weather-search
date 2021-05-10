import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Card,
  makeStyles,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Server from "../JsonServer.json";
import { useEffect, useState } from "react";
import { getWeekDay } from "../utils/DateTime";

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      margin: 36,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 48,
      marginRight: 120,
      marginBottom: 48,
    },
    borderRadius: 12,
  },
  accordions: {
    // margin: 8,
  },
}));

const Forecast = () => {
  const classes = useStyles();

  const [forecastData, setForecastData] = useState([
    {
      dayTemp: null,
      nightTemp: null,
      humidity: null,
      cloudiness: null,
    },
  ]);

  const fetchForecasts = () => {
    // console.log("data", forecastData);
    for (let i = 1; i < 7; i++) {
      setForecastData((forecastData) => [
        //I NEED TO PASS STATE AS ARGUMENT FFS, WASTED 5 HOURS
        ...forecastData,
        {
          dateTime: Server.daily[i].dt.toString(), //only for key and stuff
          dayTemp: Server.daily[i].temp.day.toFixed(2).toString(),
          nightTemp: Server.daily[i].temp.night.toFixed(2).toString(),
          humidity: Server.daily[i].humidity.toString(),
          cloudiness: Server.daily[i].clouds.toString(),
        },
      ]);
    }
  };

  useEffect(() => {
    fetchForecasts();
  }, [setForecastData]);

  return (
    <>
      <Card variant="outlined" className={classes.main}>
        {forecastData.map((singleDay) =>
          //To check if singleday holds null value or not, because if null it will show empty cell in accordion
          singleDay.dayTemp ? (
            <Accordion className={classes.accordions}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{getWeekDay(singleDay.dateTime)}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={6}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
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
                          fill-rule="evenodd"
                          d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                        />
                      </svg>
                    </Grid>
                    <Grid>
                      <Typography>Day Temperature</Typography>
                      <Typography>{Math.round(singleDay.dayTemp) - 270}°</Typography>
                    </Grid>
                  </Grid>
                  {/* ------------------ */}
                  <Grid
                    item
                    xs={6}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
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
                          fill-rule="evenodd"
                          d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                        />
                      </svg>
                    </Grid>
                    <Grid>
                      <Typography>Night Temperature</Typography>
                      <Typography>{Math.round(singleDay.nightTemp) - 270}°</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionDetails>
              {/* ================================================================ */}
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={6}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
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
                          fill-rule="evenodd"
                          d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"
                        />
                      </svg>
                    </Grid>
                    <Grid>
                      <Typography>Humidity</Typography>
                      <Typography>{singleDay.humidity}%</Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid style={{ marginRight: 12 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cloud-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                      </svg>
                    </Grid>
                    <Grid>
                      <Typography>Cloudiness</Typography>
                      <Typography>{singleDay.cloudiness}%</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ) : null
        )}
      </Card>
    </>
  );
};

export default Forecast;
