import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "63vw",
  },
  slider: {
    color: "#FFBD58",
  },
  title: {
    color: "#632F31",
    fontWeight: "bold",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 90,
    label: "90",
  },
];

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1, 6]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <h5 className={classes.title}>Bitterness:</h5> If you enjoy a hoppier
        beer, like an IPA, stick to brews that have a high IBU (30+). More of a
        light beer drinker? Look for IBU’s with a lower number (0-15).
      </Typography>
      <Slider
        className={classes.slider}
        min={1}
        max={90}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
}
