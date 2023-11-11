import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from '@mui/icons-material/Key';
import SimCardIcon from '@mui/icons-material/SimCard';
import { useNavigate } from "react-router-dom";

function ForgetInformation() {
  const navigate=useNavigate();
  const handleBack=()=>navigate("/login");
  const handle=()=>navigate("/forget-phone");
  const handle1=()=>navigate("/forgetpass-phone");
  
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#317fe3" }}>
          <ArrowBackIcon  onClick={handleBack}/>
        </IconButton>
        <Typography>Forget Information</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack pt={1}>
        <Typography fontWeight={500}>Enter one of the options below</Typography>
      </Stack>
      <Stack pt={2}>
        <Button
          variant="contained"
          boxShadow="none"
          onClick={handle}
          sx={{
            backgroundColor: "white",
            color: "#4d94ff",
            border: " 2px solid #317fe3",
            boxShadow:'none',
          }}
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Stack display="flex" direction="row" >
              <AccountBoxIcon sx={{width:20,height:20}}/>
              <Typography fontSize={13} fontWeight={700} pl={1} sx={{ boxShadow:'none',}}>forget username</Typography>
            </Stack>
            <Stack > 
              <ArrowForwardIcon />
            </Stack>
          </Stack>
        </Button>
      </Stack>
      <Stack pt={2}>
        <Button
          variant="contained"
          onClick={handle1}
          boxShadow="none"
          sx={{
            backgroundColor: "white",
            color: "#4d94ff",
            border: " 2px solid #317fe3",
            boxShadow:'none',
          }}
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
           
          >
            <Stack display="flex" direction="row" >
              <KeyIcon sx={{width:20,height:20}}/>
              <Typography pl={1} fontSize={13} fontWeight={700} sx={{ boxShadow:'none',}}>forget password</Typography>
            </Stack>
            <Stack > 
              <ArrowForwardIcon />
            </Stack>
          </Stack>
        </Button>
      </Stack>
      <Stack pt={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#4d94ff",
            border: " 2px solid #317fe3",
            boxShadow:'none',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            
          >
            <Stack direction="row" >
              <SimCardIcon sx={{width:20,height:20}}/>
              <Typography pl={1} fontSize={13} fontWeight={700} sx={{ boxShadow:'none',}}>change PhoneNumber </Typography>
            </Stack>
            <Stack > 
              <ArrowForwardIcon />
            </Stack>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
}
export default ForgetInformation;
