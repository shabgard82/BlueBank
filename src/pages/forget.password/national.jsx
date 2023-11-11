import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import national from "./national.module.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";

function ForgetPasswordNational() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/forgetpass-sms");
  const handle=()=>navigate('/ersal-darkhast');

  return (
    <Stack className={national.all}>
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
          <Typography>forget password</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography>Enter your national code</Typography>
          <input
            className={national.input}
            placeholder="national code is ten digits"
          ></input>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        className={national.btn}
        pb={3}
      >
        <IconButton sx={{ backgroundColor: "#4d94ff", color: "white" }}>
          <ArrowForwardIcon sx={{ width: "30px", height: "30px" }} onClick={handle}/>
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default ForgetPasswordNational;