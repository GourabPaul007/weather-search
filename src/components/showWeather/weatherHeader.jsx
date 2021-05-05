import { Typography } from "@material-ui/core";
import Server from "../../JsonServer.json";

const WeatherHeader = () => {
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
          - {Server.name}
        </Typography>
      </Typography>
    </>
  );
};

export default WeatherHeader;
