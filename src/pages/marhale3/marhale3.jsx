import { Stack, Typography, stepLabelClasses } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { useNavigate, useState } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import VerticalLinearStepper from "../../components/steper";

function Marhale3() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/identify");
  const backClik = () => navigate("/scan-backcard");
  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={1}
        >
          <IconButton sx={{ color: "#4d94ff" }}>
            <ArrowBackIcon onClick={backClik} />
          </IconButton>

          <IconButton color="primary">
            <HelpIcon />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography fontFamily="sans-serif" fontSize={20} fontWeight={600}>
            open account in blue
          </Typography>
          <Typography fontFamily="sans-serif" className={styles.text2}>
            It only takes 7 minutes to complete steps
          </Typography>
        </Stack>
        <Stack pt={3}>
          <VerticalLinearStepper />
        </Stack>
      </Stack>
      <Stack className={styles.botn}>
        <Stack mt={3}>
          <Button onClick={handleClick} variant="contained">
            Continuation
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Marhale3;