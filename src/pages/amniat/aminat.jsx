import React from "react";
import styles from "./styles.module.css";
import { Stack, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logout from "../../images/logout.jpg";
import fingerPrint from "../../images/fingerPrint.jpg";
import myphone from "../../images/myphone.jpg";
import password from "../../images/password.jpg";
import enteghal from "../../images/enteghal.jpg";
import changePass from "../../images/changePass.jpg";
import { useNavigate } from "react-router-dom";

function Amniat() {
  const navigate = useNavigate();
  const handleBack =()=> navigate("/profile");
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
        <Typography>Security and privacy</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={fingerPrint} className={styles.img} />
            <Typography pl={1}>Fingerprint login</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={changePass} className={styles.img} />
            <Typography pl={1}>change Password</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={password} className={styles.img} />
            <Typography pl={1}>Transaction code</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={myphone} className={styles.img} />
            <Typography pl={1}>My devices</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={enteghal} className={styles.img} />
            <Typography pl={1}>Transfer money to contacts</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pt={2}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={logout} className={styles.img} />
            <Typography pl={1}>Sign out of the account</Typography>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Amniat;
