import { useFormik } from "formik";
import { TextField, Button, Alert, Typography } from "@mui/material";
import * as yup from "yup";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Constants from "./AppConstant";

export function Admin() {
  let url = Constants.url;
  let validationSchema = yup.object().shape({
    img: yup.string().required(),
    title: yup.string().required(),
    src: yup.string().required(),
  });

  const { handleBlur, handleChange, handleSubmit, touched, errors } = useFormik(
    {
      initialValues: { img: "", title: "", src: "" },
      validationSchema,
      onSubmit: (value) => {
        console.log(value);

        let req = {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: JSON.stringify({
            img: value.img,
            title: value.title,
            src: value.src,
          }),
        };

        fetch(`${url}admin`, req)
          .then((response) => response.json())
          .then((data) => data.acknowledged && alert("Successfully Added"));
      },
    }
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="App-header">
        <Typography
          variant="h5"
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          (<WorkspacePremiumIcon /> User) Add your.... Own Album
        </Typography>
        <Typography
          variant="h6"
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          <a
            target="blank"
            href="https://codesandbox.io/s/dhn63?file=/src/App.js:807-870"
          >
            Note: Use Song Link
          </a>
        </Typography>
        <TextField
          sx={{
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
            },
          }}
          id="input-with-icon-textfield"
          label="img"
          name="img"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.img && touched.img ? (
          <Alert severity="error">{errors.img}</Alert>
        ) : (
          ""
        )}

        <TextField
          sx={{
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
            },
          }}
          id="input-with-icon-textfield"
          name="title"
          label="title"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.title && touched.title ? (
          <Alert severity="error">{errors.title}</Alert>
        ) : (
          ""
        )}
        <TextField
          sx={{
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
            },
          }}
          id="input-with-icon-textfield"
          name="src"
          label="src"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.src && touched.src ? (
          <Alert severity="error">{errors.src}</Alert>
        ) : (
          ""
        )}
        <Button
          type="submit"
          variant="contained"
          className="Stack"
          sx={{
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red !important",
            },
          }}
        >
          <div>Add Song</div>
        </Button>
      </form>
    </div>
  );
}
