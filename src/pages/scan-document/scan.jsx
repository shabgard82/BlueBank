import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function ScanDocument() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/fingerprint");
  const handleClick = () => navigate("/scan-nationalcard");

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
        <Typography sx={{ fontWeight: "600" }}>Scan Document</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack pt={1}>
        <Typography fontWeight={500}>Enter one of the options below</Typography>
      </Stack>
      <Stack pt={2}>
        <Button
          onClick={handleClick}
          variant="contained"
          boxShadow="none"
          sx={{
            backgroundColor: "white",
            color: "#4d94ff",
            border: " 2px solid #4d94ff",
            boxShadow: "none",
          }}
        >
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Stack display="flex" direction="row">
              <Typography
                fontSize={13}
                fontWeight={700}
                pl={1}
                sx={{ boxShadow: "none" }}
              >
                I have a national smart card
              </Typography>
            </Stack>
            <Stack>
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
            border: " 2px solid #4d94ff",
            boxShadow: "none",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Stack direction="row">
              <Typography
                pl={1}
                fontSize={13}
                fontWeight={700}
                sx={{ boxShadow: "none" }}
              >
                I have ID and tracking code{" "}
              </Typography>
            </Stack>
            <Stack>
              <ArrowForwardIcon />
            </Stack>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
}
export default ScanDocument;
