import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Card,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useContext } from "react";
import { getWeekDay } from "../utils/DateTime";
import TempDay from "./forecast/tempDay";
import TempNight from "./forecast/tempNight";
import Humidity from "./forecast/humidity";
import Cloudiness from "./forecast/cloudiness";

import { ForecastContext } from "../contexts/forecastContext";
import { iconPicker } from "../utils/iconPicker";

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      margin: 36,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 48,
      marginRight: 160,
      marginBottom: 48,
    },
    borderRadius: 12,
  },
  expandIcon: {
    "&$expanded": {
      transition: ".5s",
      transform: "rotate(360deg)",
    },
  },
  expanded: {},
}));

const Forecast = () => {
  const classes = useStyles();

  const [forecastData, setForecastData] = useContext(ForecastContext);

  return (
    <>
      <Card variant="outlined" className={classes.main}>
        {forecastData.map((singleDay) =>
          //To check if singleday holds null value or not, because if null it will show empty cell in accordion
          singleDay.forecastDayTemp ? (
            <Accordion
              key={singleDay.i}
              className={classes.accordions}
              defaultExpanded={singleDay.i == 1 ? true : false}
            >
              <AccordionSummary
                classes={{
                  expandIcon: classes.expandIcon,
                  expanded: classes.expanded,
                }}
                // expandIcon={<ExpandMoreIcon />}
                expandIcon={iconPicker(singleDay.forecastMain)}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  {singleDay.i == 1 ? (
                    <Typography>Tomorrow</Typography>
                  ) : (
                    getWeekDay(singleDay.forecastDateTime)
                  )}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <TempDay singleDay={singleDay} />
                  <TempNight singleDay={singleDay} />
                </Grid>
              </AccordionDetails>
              {/* ================================================================ */}
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Humidity singleDay={singleDay} />
                  <Cloudiness singleDay={singleDay} />
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
