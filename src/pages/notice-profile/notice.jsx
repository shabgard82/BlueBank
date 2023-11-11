import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Notice() {
  const navigate=useNavigate();
  const handleBack=()=>navigate('/profile');
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack}/>
        </IconButton>
        <Typography>Notification settings</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack display='flex' direction='row' justifyContent='space-between' alignItems='center'>
        <Stack>
          <Typography>Security notifications</Typography>
        </Stack>
        <Stack display='flex' direction='row' alignItems='center' pt={2}>
          <Typography sx={{color:'gray'}} pr={2}>SMS</Typography>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
      <Stack display='flex' direction='row' justifyContent='space-between' alignItems='center'>
        <Stack>
          <Typography>Notification of transactions</Typography>
        </Stack>
        <Stack display='flex' direction='row' alignItems='center' pt={2}>
          <Typography sx={{color:'gray'}} pr={2}>notifications</Typography>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
      <Stack display='flex' direction='row' justifyContent='space-between' alignItems='center'>
        <Stack>
          <Typography>Login notifications</Typography>
        </Stack>
        <Stack display='flex' direction='row' alignItems='center' pt={2}>
          <Typography sx={{color:'gray'}} pr={2}>notifications</Typography>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Notice;
