import { motion } from "framer-motion";
import PauseCircleFilledSharpIcon from "@mui/icons-material/PauseCircleFilledSharp";
import VpnKeySharpIcon from "@mui/icons-material/VpnKeySharp";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://i.pinimg.com/originals/ac/a4/e3/aca4e3c9f73344ec8fd7d16ad0324d97.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <p>
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            ga!kan{" "}
          </motion.p>

          <motion.p
            initial={{ scale: 1 }}
            animate={{ scale: 3, y: 80 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 500,
            }}
          >
            <PauseCircleFilledSharpIcon />{" "}
          </motion.p>

          <motion.p
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            mu$!c
          </motion.p>
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => navigate("/Signin")}
              className="Stack"
              variant="contained"
            >
              <VpnKeySharpIcon />
              <div>Signin</div>
            </Button>
            <Button
              onClick={() => navigate("/Signup")}
              className="Stack"
              variant="contained"
            >
              <CreateIcon />
              <div>Signup</div>
            </Button>
          </Stack>
        </motion.div>
      </header>
    </div>
  );
}
