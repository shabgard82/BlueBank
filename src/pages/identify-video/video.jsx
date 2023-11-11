import { Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import identify from "../../videos/identify.mp4";
import styles from "./styles.module.css";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";

function IdentifyVideo() {
  const navigate = useNavigate();
  const handle = () => navigate("/payan-sabtnam");
  return (
    <Stack
      display="flex"
      direction="column"
      IdentifyVideo
      justifyContent="space-between"
      className={styles.all}
    >
      <Stack display="flex" direction="column">
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#317fe3" }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontWeight: "600" }}>Identification</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <video
            src={identify}
            autoPlay
            loop
            muted
            className={styles.video}
          ></video>
        </Stack>
      </Stack>
      <Stack pb={2} className={styles.btn}>
        <Button
          variant="contained"
          sx={{ fontWeight: "600", boxShadow: "none" }}
          onClick={handle}
        >
          confirmation and continue
        </Button>
      </Stack>
    </Stack>
  );
}
export default IdentifyVideo;
