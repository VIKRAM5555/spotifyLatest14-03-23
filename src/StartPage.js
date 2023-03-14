import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import gitar from "./Assets/ScrollImg/gitar.webp";
import caset from "./Assets/ScrollImg/caset.jpg";
import earbuds from "./Assets/ScrollImg/earbuds.jpg";
import ancient from "./Assets/ScrollImg/ancient.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export function StartPage() {
  const navigate = useNavigate();
  const [index, SetIndex] = useState("");
  const startContent = [
    {
      title: "Unmatched Music Collection ",
      description:
        "Melodious boasts a massive collection of over 50 million songs, covering all genres, eras, and regions. Whether you're a fan of classic rock, hip-hop, EDM, or country, Melodious has got you covered with an unmatched music collection that you can access anytime, anywhere",
      img: gitar,
    },
    {
      title: " Music Made Just for You ",
      description:
        " Melodious understands that every listener has unique music preferences. That's why we use our smart algorithm to analyze your listening habits, favorite artists, and genres to create personalized playlists that cater to your taste. Whether you're in the mood for upbeat dance tracks or mellow acoustic ballads, Melodious has a playlist that's tailored just for you",
      img: ancient,
    },
    {
      title: "Explore New Artists and Genres",
      description:
        "Melodious knows that discovering new music can be a daunting task. That's why we've made it easy for you to explore new artists and genres with our Discover feature. Our smart algorithm recommends new tracks and artists based on your listening habits and preferences, ensuring that you never miss out on the latest hits.",
      img: earbuds,
    },
    {
      title: "Music Without Interruptions ",
      description:
        "Melodious provides a seamless listening experience across all your devices. Whether you're using your phone, tablet, or computer, Melodious synchronizes your playlist, history, and preferences, ensuring that you can enjoy your music without any interruptions. With Melodious, you can seamlessly transition from your commute to your workout to your downtime without missing a beat.",
      img: caset,
    },
  ];
  const handleClick = (val) => {
    const element = document.getElementById(`content${val}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="page">
      <div className="startpage">
        <div
          style={{ width: "5vw", height: "3vh" }}
          className="startpageContentButton"
        >
          {" "}
          <h1>Started</h1>
        </div>
        <div className="startpageContent">
          {startContent.map((a, i) => (
            <div
              id={i}
              onClick={(e) => {
                handleClick(e.target.id);
              }}
              className="startpageContentButton"
              style={{ overflow: "hidden", padding: "20px" }}
            >
              {
                <h4
                  id={i}
                  onClick={(e) => {
                    handleClick(e.target.id);
                  }}
                >
                  {a.title}
                </h4>
              }
              {a.description}
            </div>
          ))}
        </div>
      </div>

      <div className="startpageContent containers">
        <div className="desc">
          {startContent.map((a, i) => (
            <RollOn a={a} i={i} SetIndex={SetIndex} />
          ))}
        </div>

        {index !== "" && (
          <div>
            <img
              style={{ borderRadius: "20px" }}
              src={startContent[index].img}
            />
          </div>
        )}
      </div>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowCircleLeftIcon />}
        role="button"
        class="button-back"
      >
        <span class="text">Back</span>
      </Button>
      <Button
        onClick={() => navigate("/welcome")}
        startIcon={<ArrowCircleRightIcon />}
        role="button"
        class="button-next"
      >
        <span class="text">Next</span>
      </Button>
    </div>
  );
}
function RollOn({ i, a, SetIndex }) {
  const [colors, setColors] = useState();
  const myRef = useRef();
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries) => {
      console.log("entry", entries[0]);
      setColors(entries[0].isIntersecting);
      entries[0].isIntersecting && SetIndex(i);
    }, options);
    observer.observe(myRef.current);
  }, []);
  return (
    <div
      style={{
        width: "40vw",
        height: "74vh",
        color: colors ? "black" : "tomato",
        fontWeight: 700,
        letterSpacing: "5px",
        wordSpacing: "5px",
      }}
      className="startpageContentButton"
      id={`content${i}`}
      ref={myRef}
    >
      {<h1>{a.title}</h1>}
      {a.description}
    </div>
  );
}
