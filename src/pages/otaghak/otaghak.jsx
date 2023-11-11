import React from "react";
import styles from "./styles.module.css";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import first from "../../images/first.jpg";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

function Otaghak() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/reward");

  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Stack>
        <Stack className={styles.otaghImg}>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <IconButton sx={{ color: "white" }}>
                <ArrowBackIcon onClick={handleBack} />
              </IconButton>
            </Stack>
            <Stack>
              <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
                <MuiDrawer />
              </IconButton>
            </Stack>
          </Stack>
          <Stack display="flex" direction="row" justifyContent="center" pt={12}>
            <img
              src={first}
              width="60px"
              height="60px"
              style={{ borderRadius: "50px" }}
            />
          </Stack>
        </Stack>

      <Stack>
      <Stack pt={4}>
          <Typography
            sx={{ color: "gray", textAlign: "center", fontSize: "15px" }}
          >
            Otaghak | Online shop
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "12px" }}
            pt={1}
            
          >
            https://www.otaghak.com/
          </Typography>
        </Stack>
      </Stack>
        <Stack pr={2} overflow-y='auto'>
          <Typography pt={4} pl={2} sx={{ fontWeight: "600" }}>
            Terms of Use
          </Typography>
          <ul>
            <Stack sx={{fontSize:'15px'}}>
              <li>
                By purchasing from this store, a percentage of your money will
                be returned to your account immediately after purchase
              </li>
            </Stack>
            <Stack pt={2}sx={{fontSize:'15px'}}>
              <li>
                The money returned to your account can be used immediately
              </li>
            </Stack>
            <Stack pt={2} sx={{fontSize:'15px'}}>
              <li>Using the bonus service is only possible with Blue cart</li>
            </Stack>
            <Stack pt={2} sx={{fontSize:'15px'}}>
              <li>This service is active in all online payment portals</li>
            </Stack>
            <Stack pt={2}sx={{fontSize:'15px'}}>
              <li>
                If the product purchased by you is returned to the store, Blue
                is allowed to withdraw the portion paid to you from the return
                location from your account and return it to the store's account.
              </li>
            </Stack>
            <Stack pt={2} sx={{fontSize:'15px'}}>
              <li>
                The percentage of money returned to your account may change. You
                can see the latest changes on the page of each store
              </li>
            </Stack>
          </ul>
        </Stack>
      </Stack>

      <Stack pl={2} pr={2} pb={2}pt={2}>
        <Button variant="contained" sx={{ fontWeight: 500, boxShadow: "none" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
            }}
            to="https://www.otaghak.com/"
          >
            View website
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
}
export default Otaghak;
