import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function TaiinZaman() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/virayesh-address");
  const handle = () => navigate("/payan-sefaresh-card");

  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#4d94ff" }}>
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
          <Typography sx={{ fontWeight: "600" }}>Blue Card order</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography pt={1}>
            Choose your time frame to receive a blue card
          </Typography>
          <Typography pt={3} fontWeight={600}>
            Thursday, August 26, 2023
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="start"
            pt={1}
            pb={1}
          >
            <IconButton>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                8:00 to 15:00
              </Button>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                15:00 to 21:00
              </Button>
            </IconButton>
          </Stack>
          <Divider></Divider>
          <Typography pt={3} fontWeight={600}>
            Saturday, August 28, 2023
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="start"
            pt={1}
            pb={1}
          >
            <IconButton>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                8:00 to 15:00
              </Button>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                15:00 to 21:00
              </Button>
            </IconButton>
          </Stack>
          <Divider></Divider>
          <Typography pt={3} fontWeight={600}>
            Sunday, August 29, 2023
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="start"
            pt={1}
            pb={1}
          >
            <IconButton>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                8:00 to 15:00
              </Button>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                15:00 to 21:00
              </Button>
            </IconButton>
          </Stack>
          <Divider></Divider>
          <Typography pt={3} fontWeight={600}>
            Monday, August 30, 2023
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="start"
            pt={1}
            pb={1}
          >
            <IconButton>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                8:00 to 15:00
              </Button>
              <Button
                className={styles.btn}
                variant="contained"
                sx={{
                  fontWeight: 500,
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#eff5f5",
                  boxShadow: "none",
                }}
              >
                15:00 to 21:00
              </Button>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Stack pb={2}>
        <Button
          variant="contained"
          onClick={handle}
          sx={{ fontWeight: 600, boxShadow: "none" }}
        >
          confirm and Order
        </Button>
      </Stack>
    </Stack>
  );
}
export default TaiinZaman;
