import React from "react";
import styles from "./styles.module.css";
import { Stack, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";
import UploadBackImg from "../../components/img-back";
import UploadImg from "../../components/img-uploader";

function ScanBackCard() {
  const navigate = useNavigate();
  const handle2 = () => navigate("/identify");
  const handleBack = () => navigate("/scan-nationalcard");
  const handle = () => navigate("/scan-backcard");

  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#317fe3" }}>
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
          <Typography sx={{ fontWeight: "600" }}>Scan Document</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={1}>
          <Typography>
            Confirm the image and information of your national card
          </Typography>
          <Stack display="flex" direction="row" justifyContent="center" pt={3}>
            <UploadImg />
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack spacing={1} pb={3}>
          <Button
            variant="contained"
            sx={{ fontWeight: "600", boxShadow: "none" }}
            onClick={handle2}
          >
            confirmation and send
          </Button>
          <Button
            onClick={handle}
            sx={{
              backgroundColor: "white",
              color: "#317fe3",
              fontWeight: "600",
              border: "2px solid #317fe3",
              boxShadow: "none",
            }}
            variant="contained"
          >
            Scan card again
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default ScanBackCard;
