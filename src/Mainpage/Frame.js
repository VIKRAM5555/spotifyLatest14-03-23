import * as React from "react";
import { Button, ListSubheader } from "@mui/material/";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";

export function Frame({ songInfo }) {
  const { id } = useParams();
  let songInfodata = songInfo.find((data) => data.id === +id);
  console.log(songInfodata);

  return (
    <div>
      <ListSubheader className="subheaderPlay">
        <h3>{songInfodata.title}</h3>
      </ListSubheader>

      <img
        className="playImg"
        src={songInfodata.img}
        alt={songInfodata.title}
      />

      <ReactAudioPlayer
        className="playerSong"
        src={songInfodata.src}
        autoPlay
        controls
      />
    </div>
  );
}
