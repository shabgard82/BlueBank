import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import note from "../../images/note.jpg";
import sticker from "../../images/sticker.jpg";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function BlueBank() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/profile");
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography>Blue Bank</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={1}
      >
        <Stack display="flex" direction="row" alignItems="center">
          <img src={note} className={styles.img} />
          <Typography pl={1}>Terms and conditions</Typography>
        </Stack>
        <ArrowForwardIosIcon fontSize="30" sx={{ color: "gray" }} />
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
      >
        <Stack display="flex" direction="row" alignItems="center">
          <img src={sticker} className={styles.img} />
          <Typography pl={1}>about us</Typography>
        </Stack>
        <ArrowForwardIosIcon fontSize="30" sx={{ color: "gray" }} />
      </Stack>
    </Stack>
  );
}
export default BlueBank;
