import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function DaryaftSooratHesab(){
  const navigate=useNavigate();
  const handleBack=()=>navigate('/home');
  return(
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
        <Typography>Receive a bill</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack pl={2} pr={2} pt={2}>
        <Typography sx={{fontWeight:'600'}}>Choose the duration you want</Typography>
      </Stack>
    </Stack>
  )
}
export default DaryaftSooratHesab;