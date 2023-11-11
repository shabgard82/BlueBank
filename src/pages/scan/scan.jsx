import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import { ScanBarcode } from "iconsax-react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import bill from "../../images/bill.jpg";
import parvaneh from "../../images/parvaneh.jpg";
import internet from "../../images/internet.jpg";
import redgift from "../../images/redgift.jpg";
import bluesim from "../../images/bluesim.jpg";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";
import { useNavigate } from "react-router-dom";
import ScanSlider from "../slider-scan/slider-scan";

function QrCodeScan() {
  const navigate = useNavigate();
  const handle = () => navigate("/charge");
  const handle1 = () => navigate("/internet");
  const handle2 = () => navigate("/bill");
  const handle3 = () => navigate("/reward");
  const handle4 = () => navigate("/auto-withdraw");
  return (
    <Stack>
      <Stack className={styles.body}>
        <Stack display="flex" direction="row" justifyContent="flex-start">
          <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack display="flex" direction="row" justifyContent="center" pt={5}>
          <ScanBarcode size="110" color="#FFF" />
        </Stack>
        <Stack pt={4}>
          <Typography
            sx={{ color: "#FFF", fontWeight: "600", textAlign: "center" }}
          >
            Send and receive with QR code
          </Typography>
        </Stack>
        <Stack>
          <IconButton sx={{ color: "white", fontWeight: "600" }}>
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack>
        <ScanSlider />
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        pr={2}
        pl={2}
      >
        <Stack display="flex" direction="column">
          <img src={redgift} width="70px" height="70px" onClick={handle3} />
          <Typography pt={1} sx={{ textAlign: "center" }}>
            gift
          </Typography>
        </Stack>
        <Stack display="flex" direction="column">
          <img src={bill} width="70px" height="70px" onClick={handle2} />
          <Typography pt={1} sx={{ textAlign: "center" }}>
            bill
          </Typography>
        </Stack>
        <Stack display="flex" direction="column">
          <img src={internet} width="70px" height="70px" onClick={handle1} />
          <Typography pt={1} sx={{ textAlign: "center" }}>
            internet
          </Typography>
        </Stack>
        <Stack display="flex" direction="column">
          <img src={bluesim} width="70px" height="70px" onClick={handle} />
          <Typography pt={1} sx={{ textAlign: "center" }}>
            charge
          </Typography>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pt={2}
        pl={3.5}
      >
        <Stack display="flex" direction="column">
          <img src={parvaneh} width="70px" height="70px" onClick={handle4} />
          <Typography pt={1} sx={{ textAlign: "center" }}>
            withdraw
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{position:"fixed",bottom:0, width:"100%"}}>
        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
export default QrCodeScan;
