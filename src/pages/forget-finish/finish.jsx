import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MuiDrawer from "../bottom-drawer/drawer";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function Finish() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/forget-national");
  const handle=()=>navigate("/login")
  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <IconButton color="primary">
              <CloseIcon onClick={handleBack} />
            </IconButton>
          </Stack>
          <Stack>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          pt={4}
        >
          <Stack>
            <IconButton>
              <CheckCircleOutlineOutlinedIcon />
            </IconButton>
            <Typography  sx={{ textAlign: "center" }}>your username</Typography>
            <Typography sx={{ textAlign: "center" }} fontWeight={900}>
              erfan_shabgard
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              Note that your username was also sent to 09395377024
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack pb={3}>
        <Button variant="contained" sx={{ fontWeight: 800 }} onClick={handle}>
          ok
        </Button>
      </Stack>
    </Stack>
  );
}
export default Finish;
