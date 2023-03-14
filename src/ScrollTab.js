import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function ScrollTab() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { i18n, t } = useTranslation();
  const handleChangeLang = (val) => {
    i18n.changeLanguage(val);
  };
  const data = JSON.parse(localStorage.getItem("myData"));
  console.log("v", data.Token);
  return (
    <Box
      sx={{
        bgcolor: "transparent",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab
          label={<WorkspacePremiumIcon />}
          onClick={() => navigate(`/payment`)}
        />

        <Tab
          label="Japanese"
          style={{ fontWeight: "900" }}
          onClick={() => {
            handleChangeLang("jp");
          }}
        />
        <Tab
          label="English"
          style={{ fontWeight: "900" }}
          onClick={() => {
            handleChangeLang("en");
          }}
        />
        <Tab
          label="PlayList"
          style={{ fontWeight: "900" }}
          onClick={() => {
            navigate(`/createplaylist`);
          }}
        />
        <Tab
          label={`Upload `}
          onClick={() => navigate(`/admin`)}
          disabled={data.Token !== "Payment successful!" ? true : false}
          style={{ fontWeight: "900" }}
        />
      </Tabs>
    </Box>
  );
}
