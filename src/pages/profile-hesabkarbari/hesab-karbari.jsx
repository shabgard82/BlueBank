import React from "react";
import bag from "../../images/bag.jpg";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import house from "../../images/house.jpg";
import simkart from "../../images/simkart.jpg";
import loc from "../../images/loc.jpg";
import { useNavigate } from "react-router-dom";

function EtelaatHesab() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/profile");
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
        <Typography>Create account</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack
        pt={1}
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
          <img src={house} className={styles.img} />
          <Typography pl={1}>Bank Account</Typography>
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
          <img src={simkart} className={styles.img} />
          <Typography pl={1}>Change mobile phone number</Typography>
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
          <img src={loc} className={styles.img} />
          <Typography pl={1}>Change of residence address</Typography>
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
          <img src={bag} className={styles.img} />
          <Typography pl={1}>job change</Typography>
        </Stack>
        <Stack>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
    </Stack>
  );
}
export default EtelaatHesab;
