import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "56vw",
  },
  slider: {
    color: "#FFBD58",
  },
  title: {
    color: "#605948",
    fontSize: "15px",
    fontWeight: "bold",
  },
});

const marks = [
  {
    value: 2,
    label: "2%",
  },
  {
    value: 16,
    label: "16%",
  },
];

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <h5 className={classes.title}>Alcohol By Volume: </h5>
        <h6>
          Takin it easy: try 2-5% abv | Average: try 5-8% | Party Time: 8-16%
        </h6>
      </Typography>

      <Slider
        className={classes.slider}
        value={value}
        min={2}
        max={16}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        marks={marks}
      />
    </div>
  );
}
