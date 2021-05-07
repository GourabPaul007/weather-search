import { Card, CardContent, makeStyles } from "@material-ui/core";

import FirstRow from "./extraWeather/firstRow";
import SecondRow from "./extraWeather/secondRow";

const useStyles = makeStyles({
  hr: {
    height: "1px",
    color: "#BDBDBD",
    backgroundColor: "#555",
    border: "none",
  },
});

const ExtraWeather = () => {
  const classes = useStyles();
  return (
    <>
      <Card variant="outlined" style={{ marginTop: 20 }}>
        <CardContent>
          <FirstRow />
          <hr className={classes.hr} />
          <SecondRow />
        </CardContent>
      </Card>
    </>
  );
};

export default ExtraWeather;
