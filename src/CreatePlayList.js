import { Button, ImageListItem, ListSubheader } from "@mui/material/";
import ReactAudioPlayer from "react-audio-player";

export function CreatePlayList({ userDataFromDB }) {
  console.log("play", userDataFromDB.isfavourite[0]);
  return (
    <div
      className="startpage"
      style={{
        width: "96vw",
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
      }}
    >
      {" "}
      {userDataFromDB.isfavourite.map((data, i) => (
        <>
          <Button style={{ margin: "20px" }}>
            <ListSubheader className="subheader" style={{ margin: "50px" }}>
              <h3>{data.title}</h3>
            </ListSubheader>

            <ReactAudioPlayer
              className="playerSong"
              src={data.src}
              autoPlay
              controls
            />
          </Button>
        </>
      ))}
    </div>
  );
}
