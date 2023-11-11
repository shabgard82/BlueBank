import React from "react";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./styles.module.css";
import intro from "../../videos/intro.mp4";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

function Intro() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/start");
  const handleClick2 = () => navigate("/login");
  return (
    <Stack>
      <video src={intro} autoPlay loop muted className={styles.video}></video>
      <Stack
        className={styles.btn}
        direction="row"
        alignItems="flex-end"
        justifyContent="center"
      >
        <IconButton>
          <Button
            onClick={handleClick2}
            variant="outlined"
            className={styles.btn1}
            size="32"
            sx={{ color: "white", fontWeight: 700,border:"1px solid white" }}
          >
            blue account
          </Button>
        </IconButton>
        <IconButton>
          <Button
            onClick={handleClick}
            sx={{ marginLeft: "3px",color: "#4d94ff", backgroundColor: "white", fontWeight: 700 }}
            className={styles.btn2}
            variant="contained"
            size="32"
          >
            open account
          </Button>
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default Intro;
