import TextField from "@mui/material/TextField";

import { useState, useContext, createContext, useEffect } from "react";
import { UserContext } from "./App";
import { useTranslation } from "react-i18next";
import Constants from "./AppConstant";

export function Search() {
  let url = Constants.url;
  const { setSearchData, searchData } = useContext(UserContext);
  const { i18n, t } = useTranslation();
  const handleChange = (event) => {
    setSearchData(event.target.value);
  };
  let req = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      search: searchData,
    }),
  };

  fetch(`${url}search`, req)
    .then((response) => response.json())
    .then((data) => data.msg);

  return (
    <div>
      <TextField
        className="searchField"
        sx={{
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red !important",
          },
        }}
        id="input-with-icon-textfield"
        label={t("Search__Listed_Songs")}
        name="Search"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
}
