import React from "react";
import styles from "./styles.module.css";
import { Button, Icon, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../images/finger.jpg";
import { useNavigate } from "react-router-dom";

function RegisterFinger() {
  const navigate = useNavigate();
  const handle = () => navigate('/scan');
  const handleBack = () => navigate("/set-password");

  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <IconButton color="primary">
            <CloseIcon onClick={handleBack}/>
          </IconButton>
        </Stack>
        <Typography sx={{fontWeight:'600'}}>create account</Typography>
        <Stack>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
      </Stack>
      <Stack>
        <Stack display="flex" direction="row" justifyContent="center" pt={2}>
          <img className={styles.img} src={img}></img>
        </Stack>
        <Typography
          sx={{ fontSize: "17px", fontWeight: "510" }}
          textAlign={"center"}
        >
          Finger print login
        </Typography>
        <Typography
          sx={{ color: "gray", textAlign: "center", fontWeight: "500" }}
        >
          You can activate your fingerprint for easier and safer login
        </Typography>
      </Stack>
      <Stack spacing={1} pb={3}>
        <Button variant="contained" sx={{ fontWeight: "600",boxShadow:'none' }} >
          Active now
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "#317fe3",
            fontWeight: "600",
            border: "2px solid #317fe3",
            boxShadow: "none",
          }}
          variant="contained"
          onClick={handle}
        >
          Not now !
        </Button>
      </Stack>
    </Stack>
  );
}
export default RegisterFinger;
