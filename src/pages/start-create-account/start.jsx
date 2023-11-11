import React from "react";
import styles from "./styles.module.css";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import images from "../../images/mTk.png";
import image from "../../images/Gdn.png";
import img from "../../images/QBj.png";
import img1 from "../../images/MXG.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MuiDrawer from "../bottom-drawer/drawer";

function StartCreateAccount() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/phone-number");
  const handleBack = () => navigate("/");
  return (
    <Stack className={styles.all} pl={1} pr={1}>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack display="flex" direction="row" justifyContent="flex-start">
          <IconButton color="primary">
            <CloseIcon onClick={handleBack} />
          </IconButton>
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "600" }}>create account</Typography>
        </Stack>
        <Stack>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="center">
        <img className={styles.img} src={images}></img>
      </Stack>
      <Stack pl={1} pr={1}>
        In the process of opening an account in Blue you need the following:
      </Stack>
      <Stack display="flex" direction="row" alignItems="center" pl={1} pr={1}>
        <Stack>
          <img className={styles.img1} src={image}></img>
        </Stack>
        <Stack pl={2}>
          <Stack>7 minutes of time !</Stack>
          <Stack sx={{ color: "gray" }}>You need less than 7 minutes</Stack>
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" alignItems="center" pl={1} pr={1}>
        <Stack>
          <img className={styles.img1} src={img}></img>
        </Stack>
        <Stack pl={2}>
          <Stack>SIM card called</Stack>
          <Stack sx={{ color: "gray" }}>Active and in your own name</Stack>
        </Stack>
      </Stack>

      <Stack display="flex" direction="row" alignItems="center" pl={1} pr={1}>
        <Stack>
          <img className={styles.img1} src={img1}></img>
        </Stack>
        <Stack pl={2}>
          <Stack>Original identity document</Stack>
          <Stack sx={{ color: "gray" }}>
            [national card] or [Code+certificate]
          </Stack>
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" alignItems="center" pl={1} pr={1}>
        <Stack>
          <img className={styles.img1} src={image}></img>
        </Stack>
        <Stack pl={2}>
          <Stack>Selfie video</Stack>
          <Stack sx={{ color: "gray" }}>
            recorded short and with specified text
          </Stack>
        </Stack>
      </Stack>

      <Stack pb={2} pl={1} pr={1}>
        <Button variant="contained" onClick={handleClick}>
          start
        </Button>
      </Stack>
    </Stack>
  );
}
export default StartCreateAccount;
