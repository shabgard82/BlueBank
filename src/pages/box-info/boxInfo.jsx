import React from "react";
import boxinfo from "../../images/boxinfo.jpg";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function BoxInfo() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/home");
  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography>Boxes</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Stack>
        <Stack display="flex" direction="row" justifyContent="center">
          <img src={boxinfo} width="200px" height="200px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
            You do not have an active box
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Create your first box
          </Typography>
        </Stack>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="center" pb={4}>
        <Button variant="contained" sx={{ width: 160, padding: 1 ,fontWeight:"600"}}>
          New Box <AddIcon />
        </Button>
      </Stack>
    </Stack>
  );
}
export default BoxInfo;
