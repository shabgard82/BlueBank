import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";

function ForgetPhoneNumber() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/forget-code");
  const handleBack = () => navigate("/login");
  return (
    <Stack className={styles.all}>
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
          <Typography>Forget username</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Typography pt={2}>Enter your phone number</Typography>
        <input
          className={styles.input}
          placeholder="like:98 939 537 7024"
        ></input>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={3}
      >
        <Typography>confirmation code will be sent</Typography>
        <Stack>
          <IconButton sx={{ backgroundColor: "#4d94ff", color: "white" }}>
            <ArrowForwardIcon
              sx={{ width: "30px", height: "30px" }}
              onClick={handleClick}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default ForgetPhoneNumber;
