import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { color } from "@mui/system";
import { useState } from "react";
export function SliderBox() {
  const [SliderValue, setSliderValue] = useState(0);
  const Colors = () => {
    if (SliderValue <= 30) {
      return { color: "red", height: "30%" };
    }
    if (SliderValue <= 60) {
      return { color: "yellow", height: "60%" };
    } else {
      return { color: "green", height: "100%" };
    }
  };

  return (
    <Box
      sx={{
        width: "15%",
        height: "30px",
        margin: "10px",
        backgroundColor: " grey",
        padding: "55px",
      }}
    >
      <Typography>
        <span style={{ color: "black" }}>Rate Our App : </span>
        {SliderValue <= 30 ? "OKAY" : SliderValue <= 60 ? "GOOD" : "THANK YOU"}
      </Typography>
      <Slider
        defaultValue={30}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={Colors}
        onChange={(e) => {
          setSliderValue(e.target.value);
        }}
      />
    </Box>
  );
}
