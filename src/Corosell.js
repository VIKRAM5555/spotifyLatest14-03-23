import { Button } from "@mui/material";
import { useState } from "react";
import zeeImg from "./Assets/coroselIMG/IMG1.webp";
import zeeImg2 from "./Assets/coroselIMG/IMG2.webp";
import zeeImg3 from "./Assets/coroselIMG/IMG3.webp";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BedtimeIcon from "@mui/icons-material/Bedtime";
export function Corosell() {
  const imgArr = [zeeImg, zeeImg2, zeeImg3];

  const [index, setIndex] = useState(0);
  const move = (direction) => {
    if (direction === "next") {
      setIndex(imgArr.length - 1 === index ? 0 : index + 1);
    } else {
      setIndex(index === 0 ? imgArr.length - 1 : index - 1);
    }
  };

  return (
    <div className="container">
      <Button onClick={() => move("next")} className="overlay right">
        <ArrowCircleRightIcon />
      </Button>
      <img
        className="image"
        src={`${imgArr[index]}?w=161&fit=crop&auto=format`}
        loading="lazy"
      />
      <div className="overlay indicator">
        {imgArr.map((a, i) => {
          return (
            <div>
              <BedtimeIcon className={i === index ? "active" : "null"} />
            </div>
          );
        })}
      </div>

      <Button onClick={() => move("previous")} className="overlay left">
        <ArrowCircleLeftIcon />
      </Button>
    </div>
  );
}
