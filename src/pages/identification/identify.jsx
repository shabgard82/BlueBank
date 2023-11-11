import { IconButton, Stack, Typography, Button } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import CheckboxList from "../../components/list-item";
import { useNavigate } from "react-router-dom";

function Identify() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/scan-backcard");
  const handle = () => navigate("/identify-video");
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#317fe3" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography sx={{ fontWeight: "600" }}>Identification</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack>
        <CheckboxList />
      </Stack>
      <Stack pb={2}>
        <Button
          variant="contained"
          sx={{ fontWeight: "600", boxShadow: "none" }}
          onClick={handle}
        >
          confirmation and continue
        </Button>
      </Stack>
    </Stack>
  );
}
export default Identify;
