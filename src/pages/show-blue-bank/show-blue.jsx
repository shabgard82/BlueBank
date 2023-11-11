import React from "react";
import styles from './styles.module.css'
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";


function ShowBlueBank(){
  const navigate=useNavigate();
  const handleBack=()=>navigate('/profile');
  return(
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
        <Typography>Blue Bank show</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack display='flex' direction='row' justifyContent='space-between' alignItems='center' pt={2}>
        <Stack>
          <Typography>Day and night mode</Typography>
        </Stack>
        <Stack display='flex' direction='row' alignItems='center' >
          <Typography sx={{color:'gray'}} pr={2}>Day</Typography>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
    </Stack>
  )
}
export default ShowBlueBank;