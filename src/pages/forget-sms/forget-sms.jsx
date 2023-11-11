import React, { useState } from "react";
import styles from "./styles.module.css";
import OtpInput from "react-otp-input";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";

function ForgetSmsCode() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleBack = () => navigate("/forget-phone");
  const handle = () => navigate("/forget-national");

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
        <Typography pt={2}>
          Enter confirmation code sent to 09395377024
        </Typography>
        <Stack
          className={styles.otpInput}
          display="flex"
          direction="row"
          justifyContent="center"
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
            focusStyle={{
              outline: "none",
              borderColor: "#000",
              background: "#4d94ff",
            }}
            shouldAutoFocus
            inputStyle={{
              marginLeft: 3,
              width: 45,
              height: 45,
              background: " #cce6ff",
              border: "1px solid #fff",
              borderRadius: "12px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        display="flex"
        direction="row"
        justifyContent="flex-end"
        className={styles.icon}
        pb={3}
      >
        <IconButton sx={{ backgroundColor: "#4d94ff", color: "white" }}>
          <ArrowForwardIcon
            onClick={handle}
            sx={{ width: "30px", height: "30px" }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default ForgetSmsCode;
