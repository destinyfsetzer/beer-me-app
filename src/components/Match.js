// import { Container } from "@material-ui/core";
import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Slider,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 375,
    height: 300,
    minWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    minWidth: 260,
  },
  textAlign: {
    margin: "100px 200px",
  },
});

export default function Match() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [value, setValue] = React.useState("");
  const [quality, setQuality] = React.useState(2);
  const [notification, setNotification] = React.useState({
    switch: "",
    slider: "",
    select: "",
  });

  // const handleOnlineChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  //   if (!event.target.checked) {
  //     setNotification({
  //       ...notification,
  //       switch:
  //         "Your application is offline. You won't be able to share or stream music to other devices.",
  //     });
  //   } else {
  //     setNotification({ ...notification, switch: "" });
  //   }
  // };

  const handleVolChange = (event, newValue) => {
    setValue(newValue);
    if (newValue > 79) {
      setNotification({
        ...notification,
        slider:
          "Listening to music at a high volume could cause long-term hearing loss.",
      });
    } else {
      setNotification({ ...notification, slider: "" });
    }
  };

  // const handleQualityChange = (event) => {
  //   setQuality(event.target.value);
  //   if (event.target.value === 1) {
  //     setNotification({
  //       ...notification,
  //       select:
  //         "Music quality is degraded. Increase quality if your connection allows it.",
  //     });
  //   } else {
  //     setNotification({ ...notification, select: "" });
  //   }
  // };

  return (
    <div>
      <Typography
        variant="h4"
        style={{ marginTop: 70, marginLeft: 180 }}
        className={classes.userText}
      >
        CUSTOM BEER MATCH
      </Typography>
      <Box
        component="span"
        m={10}
        display="flex "
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Find your match
            </Typography>
            <Typography>let us find the perfect brew for you</Typography>
          </CardContent>
          <CardActions>
            <Typography>SRM</Typography>
            <Slider
              Value={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleVolChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
          <CardActions>
            <Typography>ABV</Typography>
            <Slider
              Value={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleVolChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
          <CardActions>
            <Typography>IBU</Typography>
            <Slider
              Value={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleVolChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
        </Card>
      </Box>
      <Typography
        variant="h5"
        style={{ marginTop: 30 }}
        className={classes.textAlign}
      >
        Your Recommendations:
        <br />
        <br />
        <Typography>{notification.switch}</Typography>
        <Typography>{notification.slider}</Typography>
        <Typography>{notification.select}</Typography>
      </Typography>
    </div>
  );
}
