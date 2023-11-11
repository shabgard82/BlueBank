import React from "react";
// import transferr from '../../images/transferr.jpg';
// import billl from '../../images/billl.jpg';
import charge from "../../images/charge.jpg";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
// import internett from '../../images/internett.jpg';

function Charge() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/qrcode-scan");
  const handleClick = () => navigate("/new-charge");
  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Stack>
        <Stack
          pr={1}
          pl={1}
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
            <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
              charge
            </Typography>
          </Stack>
          <Stack>
            <MuiDrawer />
          </Stack>
        </Stack>
        <Stack pt={3} pl={2}>
          <Typography sx={{ fontWeight: "500" }}>SIM Carts</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack display="flex" direction="row" justifyContent="center">
          <img src={charge} width="300px" height="300px" />
        </Stack>
        <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
          You have not bought a charger
        </Typography>
        <Typography sx={{ color: "gray", textAlign: "center" }}>
          Buy your first recharge
        </Typography>
      </Stack>
      <Stack display="flex" direction="row" justifyContent="center" pb={3}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ width: 160, padding: 1, fontWeight: "600" }}
        >
          New Charge <AddIcon />
        </Button>
      </Stack>
    </Stack>
  );
}
export default Charge;
