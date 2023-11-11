import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import notif from "../../images/notif.jpg";

function Notif() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/home");
  return (
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
        <Typography>Notifications</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        pt={8}
      >
        <img src={notif} width="200px" height="200px" />
      </Stack>
      <Stack pt={2}>
        <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
          You have no notifications to display
        </Typography>
        <Typography sx={{ color: "gray", textAlign: "center" }}>
          Notifications are displayed in this section
        </Typography>
      </Stack>
    </Stack>
  );
}
export default Notif;
