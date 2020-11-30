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
    label: "2",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 40,
    label: "40",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 15]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <h5 className={classes.title}>SRM:</h5>
        <h6>
          This number represents the color of your beer. The SRM scale measures
          beers that are the clearest straw color (2), to the deepest black
          (40).{" "}
        </h6>
      </Typography>
      <div className="slider">
        <Slider
          className={classes.slider}
          min={2}
          max={40}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
    </div>
  );
}
