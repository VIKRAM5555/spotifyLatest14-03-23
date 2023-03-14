import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function GetStarted() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/StartPage");
  };
  return (
    <div>
      <div className="page">
        <div className="startpage App">
          <div
            style={{
              position: "absolute",
              left: "45%",
              bottom: "20%",
            }}
            className="startpageContent"
          >
            <Paper
              elevation={20}
              sx={{ padding: 2 }}
              style={{
                position: "absolute",
                left: "-45%",
                bottom: "20%",
                backgroundColor: "transparent",
                width: "fit-content",
                height: "20vh",
                color: "silver",
                borderRadius: "40px",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  letterSpacing: "10px",
                }}
              >
                Find your rhythm.....
              </Typography>
              <Typography variant="h1"> and your passion for music</Typography>
            </Paper>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              bottom: "-20%",
            }}
            className="startpageContent"
          >
            <Button
              onClick={handleClick}
              className="Stack"
              sx={{
                width: "auto",
                height: "25%",
                textTransform: "capitalize",
                fontFamily: "monospace",
                letterSpacing: "5px",
                borderRadius: "20px",
                backgroundColor: "rgba(11, 36, 42, 0.993)",
              }}
              variant="contained"
              color="success"
            >
              <h2> Get Started</h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
