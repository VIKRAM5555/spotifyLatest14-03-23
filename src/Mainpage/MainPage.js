import { Button, LinearProgress, Paper } from "@mui/material";
import * as React from "react";
import { ImageList, ImageListItem, ListSubheader } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { Profile } from "../profile";
import { Search } from "../Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import commondata from "../common";
import { UserContext } from "../App";
import { CreatePlayList } from "../CreatePlayList";
import ScrollTab from "../ScrollTab";
import { MiniDrawer } from "../MiniDrawer";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export function MainPage() {
  return (
    <div className="main">
      <FrameVideo />
    </div>
  );
}

export function FrameVideo() {
  const { songInfo, userDataFromDB, UsernameData, setUserDataFromDB } =
    React.useContext(UserContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { i18n, t } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleAddPlaylist = (item) => {
    console.log("answer", item);
    let req = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({
        isUserFavorite: item,
        user: UsernameData,
      }),
    };
    fetch(`${commondata.url}userSpace/favoriteSong`, req)
      .then((response) => response.json())
      .then((data) => {
        setUserDataFromDB(data.userData);
      });
  };

  return (
    <div>
      <Paper>
        {/* <MiniDrawer sx={{ width: 1300, height: 1600, padding: "20px" }} /> */}
      </Paper>
      <Paper
        sx={{
          width: "95vw",
          height: " 95vh",
          backgroundColor: "yellow",
          margin: "20px",
          padding: "5px",
          borderRadius: "30px",
        }}
        cols={5}
      >
        <div
          style={{ width: "93%", marginTop: "2%" }}
          className="startpageContent"
        >
          <div>
            {" "}
            <ScrollTab />
            <Profile />
            <Search />
          </div>
          <div>
            {" "}
            <h3> {t("Songs_for_You")}</h3>
            <h4> {t("BASED_ON_RECENT_LISTENING")}</h4>
            <h2> {t("Click_Image")}</h2>
            <h5> {t("ENJOY_TRENDING_INSTRUMENTAL")}</h5>
          </div>
          {songInfo.map((item) => (
            <div>
              <Paper
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "300px",
                  height: "300px",
                }}
                onClick={() => navigate(`/MainPage/${item.id}`)}
              >
                <Paper
                  sx={{
                    width: 300,
                    height: 300,
                  }}
                  key={item.img}
                >
                  <ListSubheader className="subheader">
                    <h3>{item.title}</h3>
                  </ListSubheader>

                  <img
                    style={{
                      width: "280px",
                      height: "180px",
                      padding: "2px",
                      margin: "5px",
                    }}
                    className="updated"
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </Paper>
              </Paper>

              <div>
                <ListSubheader
                  className="subheader"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    padding: "2px",
                    margin: "5px",
                  }}
                  onClick={handleClick}
                >
                  <Typography
                    sx={{ p: 1 }}
                    onClick={() => handleAddPlaylist(item)}
                  >
                    {userDataFromDB.isfavourite.some(
                      (a) => a.id === item.id
                    ) ? (
                      <>{t("Remove_From_Playlist")}</>
                    ) : (
                      <>{t("Add_to_Playlist")} </>
                    )}
                  </Typography>
                </ListSubheader>
              </div>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
}
