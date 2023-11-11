import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import happyimg from "../../images/happyimg.jpg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function PayanSabtenam() {
  const navigate = useNavigate();
  const handle = () => navigate("/animation");
  return (
    <Stack className={styles.all}>
      <Stack display="flex" direction="row" justifyContent="flex-end">
        <IconButton color="primary">
          <HelpIcon />
        </IconButton>
      </Stack>
      <Stack>
        <Stack display="flex" direction="row" justifyContent="center">
          <img src={happyimg} className={styles.img} />
        </Stack>
        <Stack display="flex" direction="column" justifyContent="center" pt={2}>
          <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
            Dear erfan Shabgerd
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center" }} pl={1} pr={1}>
            Your Bluebank account has been successfully opened
          </Typography>
        </Stack>
      </Stack>
      <Stack pb={2}>
        <Button
          variant="contained"
          sx={{ fontWeight: "600", boxShadow: "none" }}
          onClick={handle}
        >
          Blue card order
        </Button>
      </Stack>
    </Stack>
  );
}
export default PayanSabtenam;
