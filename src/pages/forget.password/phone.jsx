import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import phone from "./phone.module.css";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";

function ForgetPassPhoneNumber() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/forgetpass-sms");
  const handleBack = () => navigate("/forget-information");
  return (
    <Stack className={phone.all}>
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
          <Typography>Forget password</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Typography pt={2}>Enter your phone number</Typography>
        <input
          className={phone.input}
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
              sx={{ width: "30px", height:"30px"}}
              onClick={handleClick}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default ForgetPassPhoneNumber;
