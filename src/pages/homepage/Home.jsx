import React, { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import tarakonesh from "../../images/tarakonesh.jpg";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";
import { Activity } from "iconsax-react";
import HomeDrawer from "../home-drawer/home-drawer";
import { useNavigate } from "react-router-dom";
import ChargeDrawer from "../charge-drawer/charge-drawer";
import { useSelector } from "react-redux";
import adi from "../../images/adi.jpg";

function Home() {
  const { transactionList } = useSelector((state) => state.transactionSlice);
  const navigate = useNavigate();
  const handle = () => navigate("/notification");
  const handle1 = () => navigate("/box-info");
  const handle2 = () => navigate("/soorat-hesab");

  const totalAmount = transactionList.reduce((accumulator, transaction) => {
    return accumulator + parseInt(transaction.amount);
  }, 0);

  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
    >
      <Stack className={styles.body}>
        <Stack display="flex" direction="row" justifyContent="space-between">
          <Stack display="flex" direction="row">
            <MenuIcon
              sx={{ marginLeft: "10px", marginTop: "15px", color: "white" }}
            />
            <SearchIcon
              sx={{ color: "white", marginLeft: "15px", marginTop: "15px" }}
            />
          </Stack>
          <Typography
            sx={{ fontWeight: "600", color: "white", marginTop: "15px" }}
          >
            Home
          </Typography>
          <Stack>
            <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
              <MuiDrawer />
              <NotificationsNoneIcon
                sx={{ color: "white", marginLeft: "15px" }}
                onClick={handle}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Stack display="flex" direction="column" justifyContent="center" pt={2}>
          <Typography
            sx={{ color: "white", textAlign: "center", fontWeight: "600" }}
            fontSize={30}
          >
            {totalAmount} $
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            pt={1}
            alignItems="center"
          >
            <Typography
              sx={{ color: "white", fontSize: 18, fontWeight: "600" }}
            >
              inventory
            </Typography>
            <HomeDrawer color="white" />
          </Stack>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          pt={6}
        >
          <Stack display="flex" direction="column" alignItems="center">
            <ChargeDrawer />
            <Typography sx={{ color: "white", fontWeight: "600" }}>
              charge account
            </Typography>
          </Stack>
          <Stack display="flex" direction="column" alignItems="center" >
            <GroupWorkOutlinedIcon
              sx={{
                color: "white",
                fontSize: 32,
                padding: "15px",
                borderRadius: "50%",
                backgroundColor: " #b3daff55",
              }}
              onClick={handle1}
            />
            <Typography pt={1} color="white" fontWeight="600">
              Box
            </Typography>
          </Stack>
          <Stack display="flex" direction="column" alignItems="center">
            <Activity
              size="32"
              color="#FFF"
              style={{
                padding: "15px",
                borderRadius: "50%",
                backgroundColor: "#b3daff55",
              }}
              onClick={handle2}
            />
            <Typography
              pt={1}
              sx={{ color: "white", textAlign: "center", fontWeight: "600" }}
            >
              Management
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {transactionList.length ? (
        transactionList.map((item) => {
          return (
            <Stack
              pt={2}
              pl={2}
              pr={2}
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ overflowY: "scroll" }}
            >
              <Stack>
                <img src={adi} width="50px" height="50px" />
              </Stack>
              <Stack>
                <Stack>
                  <Typography>Normal Charge account</Typography>
                </Stack>
                <Stack sx={{ color: "gray" }}>{item.datetime}</Stack>
              </Stack>
              <Stack sx={{ fontSize: "18px" }}>
                <mark style={{ backgroundColor: "#c0cfcd", color: "black" }}>
                  {item.amount} $
                </mark>
              </Stack>
            </Stack>
          );
        })
      ) : (
        <Stack>
          <Stack display="flex" direction="row" justifyContent="center" pt={8}>
            <img src={tarakonesh} width="200px" height="200px" />
          </Stack>
          <Stack pt={2}>
            <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
              You have no transaction
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              Make your first transaction
            </Typography>
          </Stack>
        </Stack>
      )}
      <Stack sx={{position:"fixed",bottom:0, width:"100%"}}>
        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
export default Home;
