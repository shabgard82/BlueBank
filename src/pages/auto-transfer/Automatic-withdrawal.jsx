import React from "react";
import transferr from "../../images/transferr.jpg";
import {IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
// import internett from '../../images/internett.jpg';

function AutoWithdraw() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/qrcode-scan");
  return (
    <Stack
      display="flex"
      direction="column"
      
    >
      <Stack>
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
            </IconButton>
          </Stack>
          <Stack>
            <Typography sx={{ textAlign: "center", fontWeight: "500" }}>
              Automatic withdrawal
            </Typography>
          </Stack>
          <Stack>
            <MuiDrawer />
          </Stack>
        </Stack>
        <Stack pt={3} pl={2}>
          <Typography sx={{ fontWeight: "600" }}>My services</Typography>
        </Stack>
      </Stack>
      <Stack pt={20}>
        <Stack display="flex" direction="row" justifyContent="space-around">
          <img src={transferr} width="200px" height="200px" />
        </Stack>
        <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
          You do not have an active service
        </Typography>
      </Stack>
    </Stack>
  );
}
export default AutoWithdraw;
