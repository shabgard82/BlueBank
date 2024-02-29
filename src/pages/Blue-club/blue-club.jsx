import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Black from "../../images/Black.jpg";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useNavigate } from "react-router-dom";

function BlueClub() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/profile");
  return (
    <Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography sx={{ fontWeight: "600" }}>Blue Club</Typography>
        <IconButton color="primary">
          <MuiDrawer />
          <EventNoteIcon />
        </IconButton>
      </Stack>
      <Stack pr={2} pl={2} pt={2}>
        <img src={Black} className={styles.img} />
      </Stack>
    </Stack>
  );
}
export default BlueClub;
