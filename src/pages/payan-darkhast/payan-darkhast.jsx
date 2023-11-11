import React from "react";
import { Stack, Typography } from "@mui/material";
import img2 from "../../images/Untitled.jpeg";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MuiDrawer from "../bottom-drawer/drawer";

function PayanDarkhast() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/forgetpass-national");
  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <IconButton color="primary">
              <CloseIcon  onClick={handleBack}/>
            </IconButton>
          </Stack>
          <Stack>Forget password</Stack>
          <Stack>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
        </Stack>
        <Stack display="flex" direction="row" justifyContent="center" pt={5}>
          <img className={styles.img} src={img2}></img>
        </Stack>
        <Stack pt={3} display="flex" direction="row" justifyContent="center">
          <Typography sx={{ fontWeight: 900 }}>
            Your request successfully registered
          </Typography>
        </Stack>
        <Stack pt={1} display="flex" direction="row" justifyContent="center">
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            The answer to your request will be notified to you via SMS within 2
            hours
          </Typography>
        </Stack>
      </Stack>
      <Stack pb={4}>
          <Button variant="contained" sx={{fontWeight:700}}>
            ok
          </Button>
        </Stack>
    </Stack>
  );
}
export default PayanDarkhast;
