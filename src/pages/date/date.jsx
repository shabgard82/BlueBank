import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
// import HelperText from "../../components/date-picker";
import DatepickerExample from "../../components/DatePicker/datepicker";

function Date() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/national-code");
  const handle = () => navigate("/create-username");

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
          <Typography sx={{fontWeight:'600'}}>Create account</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography>Enter your date of birth</Typography>
        </Stack>
        <Stack pt={1} pr={1}>
          {/* <HelperText /> */}
          <DatepickerExample />
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        className={styles.btn}
        pb={3}
      >
        <IconButton sx={{ backgroundColor: "#317fe3", color: "white" }}>
          <ArrowForwardIcon
            sx={{ width: "30px", height: "30px" }}
            onClick={handle}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}
export default Date;
