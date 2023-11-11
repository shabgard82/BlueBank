import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import sefaresh from "../../images/sefaresh.jpg";
import { useNavigate } from "react-router-dom";

function PayanSefareshCard() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");
  const handleBack = () => navigate("/entekhab-zaman");
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography sx={{ fontWeight: "600" }}>Blue Card order</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack pt={2}>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={sefaresh} className={styles.img} />
        </Stack>
        <Typography
          pt={1}
          pl={1}
          pr={1}
          sx={{ textAlign: "center", fontWeight: "500" }}
        >
          Your blue card order has been successfully registered
        </Typography>
        <Typography
          pt={1}
          sx={{ textAlign: "center", color: "gray" }}
          pl={2}
          pr={2}
        >
          Your blue card will be delivered to you on Thursday, August 26, 2023
        </Typography>
      </Stack>
      <Stack pb={2}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ fontWeight: 600, boxShadow: "none" }}
        >
          confirm and Order
        </Button>
      </Stack>
    </Stack>
  );
}
export default PayanSefareshCard;
