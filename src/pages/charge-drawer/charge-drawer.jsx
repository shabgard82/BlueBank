import React, { useState } from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import chargekhodkar from "../../images/chargekhodkar.jpg";
import chargeadi from "../../images/chrgeadi.jpg";
import styles from "./styles.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function ChargeDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const handle = () => navigate("/normal-charge");
  return (
    <>
      <IconButton onClick={() => setisDrawerOpen(true)}>
        <AddCircleIcon sx={{ color: "white", fontSize: 63 }} />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Stack display="flex" direction="column" pt={2}>
          <Typography sx={{ textAlign: "center" }} fontWeight={600}>
            Charge Account
          </Typography>
          <Typography sx={{ textAlign: "center" }} color="gray">
            Choose one of the methods below
          </Typography>
        </Stack>
        <Stack
          pl={2}
          pr={2}
          pt={4}
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack display="flex" direction="row" alignItems="center" onClick={handle}>
            <Stack>
              <img src={chargeadi} className={styles.img1} />
            </Stack>
            <Stack pl={2}>
              <Typography>Normal charging</Typography>
              <Typography sx={{ color: "gray" }}>
                With all bank cards
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
        <Stack
          pl={2}
          pr={2}
          pt={2}
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack display="flex" direction="row" alignItems="center" pb={3}>
            <Stack>
              <img src={chargeadi} className={styles.img1} />
            </Stack>
            <Stack pl={2}>
              <Typography>Automatic charging</Typography>
              <Typography sx={{ color: "gray" }}>
                Recharge your account automatically
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default ChargeDrawer;
