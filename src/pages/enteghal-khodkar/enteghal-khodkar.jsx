import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import transfer from "../../images/transfer.jpg";
import { useNavigate } from "react-router-dom";

function EnteghalKhodkar() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/enteghal");
  const handle = () => navigate("/baygani");
  return (
    <>
      <Stack
        pr={1}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <IconButton color="primary">
            <ArrowBackIcon onClick={handleBack} />
            <Stack width={40}></Stack>
          </IconButton>
        </Stack>
        <Stack>
          <Typography sx={{ textAlign: "center" }}>
            Automatic transfer
          </Typography>
        </Stack>
        <Stack display="flex" direction="row" alignItems="center">
          <IconButton>
            <MuiDrawer />
          </IconButton>
          <IconButton color="primary">
            <EventNoteIcon onClick={handle}/>
          </IconButton>
        </Stack>
      </Stack>
      <Stack pt={2} pl={2}>
        <Typography sx={{ fontWeight: "600" }}>Automatic transfers</Typography>
      </Stack>
      <Stack display="flex" direction="column" pt={8}>
        <Stack display="flex" direction="row" justifyContent="center">
          <img src={transfer} width="200px" height="200px" />
        </Stack>
        <Stack>
          <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
            You do not have a transfer in the future
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Make your first transfer
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
export default EnteghalKhodkar;
