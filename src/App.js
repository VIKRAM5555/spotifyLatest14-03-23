import "./App.css";
import { Welcome } from "./Welcome";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignupPage from "./Signup";
import { Signin } from "./Signin";
import { MainPage } from "./Mainpage/MainPage";
import { Frame } from "./Mainpage/Frame";
import { Profile } from "./profile";
import { createContext, useEffect, useState } from "react";
import { Search } from "./Search";
import { Admin } from "./Admin";
import { CreatePlayList } from "./CreatePlayList";
import { Corosell } from "./Corosell";
import { SliderBox } from "./Slider";

import ScrollTab from "./ScrollTab";
import Constants from "./AppConstant";

import { MiniDrawer } from "./MiniDrawer";
import "./i18next";
import { StartPage } from "./StartPage";
import PaymentForm from "./brainTreePayment";
import GetStarted from "./getStarted";
export const UserContext = createContext();

function App() {
  let url = Constants.url;
  const [UsernameData, setUsernameData] = useState("No User");
  const [searchData, setSearchData] = useState("");
  const [songInfo, setsongInfo] = useState([]);
  const [userDataFromDB, setUserDataFromDB] = useState({});
  console.log("ans", userDataFromDB);

  // useEffect(() => {
  //   fetch(`${url}track`)
  //     .then((response) => response.json())
  //     .then((data) => setsongInfo(data));
  // }, []);

  useEffect(() => {
    let req = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ searchTrack: searchData }),
    };

    fetch(`${url}search/track`, req)
      .then((response) => response.json())
      .then((data) => setsongInfo([...data]));
  }, [searchData]);

  var updated = [
    {
      _id: "630a16da8fe7316763ce11c3",
      id: 1,
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c4",
      id: 2,
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c5",
      id: 3,
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c6",
      id: 4,
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c7",
      id: 5,
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c8",
      id: 6,
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11c9",
      id: 7,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11ca",
      id: 8,
      img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
      title: "Tree",
    },
    {
      _id: "630a16da8fe7316763ce11cb",
      id: 9,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11cc",
      id: 10,
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11cd",
      id: 11,
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11ce",
      id: 12,
      img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
      title: "Camping Car",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11cf",
      id: 13,
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
    },
    {
      _id: "630a16da8fe7316763ce11d0",
      id: 14,
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
    },
  ];

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          UsernameData: UsernameData,
          searchData,
          songInfo,
          setSearchData,
          setUserDataFromDB,
          userDataFromDB,

          setUsernameData: setUsernameData,
        }}
      >
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/StartPage" element={<StartPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/MainPage/:id" element={<Frame songInfo={songInfo} />} />
          <Route
            path="/CreatePlayList"
            element={<CreatePlayList userDataFromDB={userDataFromDB} />}
          />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Corosell" element={<Corosell />} />

          <Route path="/Slider" element={<SliderBox />} />
          <Route path="/ScrollTab" element={<ScrollTab />} />
          <Route path="/MiniDrawer" element={<MiniDrawer />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/" element={<GetStarted />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;
