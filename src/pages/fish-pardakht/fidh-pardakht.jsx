import React from "react";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";
import pardakhtprof from "../../images/pardakhtprof.jpg";
import { useSelector } from "react-redux";
import pardakht from "../../images/pardakht.jpg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function FishPardakht() {
  const random_code = Math.floor(1000000000 + Math.random() * 90000000);
  const random = Math.floor(10000000 + Math.random() * 9000000);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const navigate = useNavigate();
  const handleBack = () => navigate("/home");
  const { Money } = useSelector((state) => state.maliSlice);
  const cardNumber = useSelector((state) => state?.numberSlice?.cardNumber);
  const username = useSelector((state) => state.userSlice.username);

  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height={"100vh"}
    >
      <Stack pl={1} pr={1}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <IconButton sx={{ color: "#4d94ff" }}>
              <ArrowBackIcon onClick={handleBack} />
            </IconButton>
          </Stack>
          <Typography sx={{ fontWeight: "600" }}>Receipt</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack>
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="center"
            pt={3}
          >
            <img src={pardakhtprof} width="100px" height="70px" />
          </Stack>
          {/* <Stack position="relative" sx={{ display: "inline-flex" }}>
              <AccountCircleIcon style={{ fontSize: 78 ,color:'blue'}} />
              <Stack
                position="absolute"
                bottom={0}
                left={0}
                transform="translate(-50%, 50%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={30}
                height={30}
                bgcolor="white"
                borderRadius="50%"
                zIndex={1}
              >
                <SearchIcon style={{ fontSize: 16 ,color:'blue'}} />
              </Stack>
            </Stack>
          </Stack> */}
          <Typography
            sx={{ fontWeight: "550", fontSize: "13px", textAlign: "center" }}
          >
            {username}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              textAlign: "center",
              color: "gray",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            IR-14 0560 6118 2800 5528 6683 01
          </Typography>
          <Stack>
            <Typography
              pt={2}
              sx={{ fontWeight: "600", fontSize: "29px", textAlign: "center" }}
            >
              {Money} $
            </Typography>
            <Typography
              pb={2}
              sx={{
                color: "gray",
                fontSize: "13px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Deposit amount
            </Typography>
            <Stack
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: "#26734d",
                padding: "5px 10px",
                borderRadius: "8px",
                margin: "0px auto",
              }}
            >
              <Stack>
                <CheckCircleIcon fontSize="5px" sx={{ color: "#fff" }} />
              </Stack>
              <Typography pl={1} sx={{ color: "#fff" }}>
                successful
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack pb={2}>
        <Divider
          sx={{
            color: "gray",
            backgroundColor: "#d1e0e0",
            fontWeight: "500",
            paddingTop: "3px",
            border: "none",
            boxShadow: "none",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "500" }}>
            time
          </Typography>
          <Typography sx={{ fontWeight: "500" }}>{`time:${
            hours < 10 ? "0" + hours : hours
          }:${
            minutes < 10 ? "0" + minutes : minutes
          } , Date: ${day}-${month}-${year}`}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "500" }}>
            Payment by card
          </Typography>
          <Typography sx={{ fontWeight: "500" }}>{cardNumber}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "500" }}>
            Reference No
          </Typography>
          <Typography sx={{ fontWeight: "500" }}>{random_code}</Typography>
        </Stack>
        <Divider />
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={2}
          pb={2}
        >
          <Typography sx={{ color: "gray", fontWeight: "500" }}>
            Issue Tracking
          </Typography>
          <Typography sx={{ fontWeight: "500" }}>{random}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" pb={1}>
        <img src={pardakht} width="90px" height="40px" alt="b.pay" />
      </Stack>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          pr={1}
          pl={1}
          pb={2}
        >
          <Stack
            display="flex"
            direction="column"
            alignItems="center"
            sx={{
              backgroundColor: "#e6f9ff",
              padding: "5px 60px",
              borderRadius: "10px",
            }}
          >
            <IconButton sx={{ color: "#1a75ff" }}>
              <SaveAltIcon />
            </IconButton>
            <Typography
              sx={{ color: "#1a75ff", fontWeight: "600", fontSize: "12px" }}
            >
              save
            </Typography>
          </Stack>
          <Stack
            display="flex"
            direction="column"
            alignItems="center"
            sx={{
              backgroundColor: "#e6f9ff",
              padding: "5px 60px",
              borderRadius: "10px",
            }}
          >
            <IconButton sx={{ color: "#1a75ff" }}>
              <ShareIcon />
            </IconButton>
            <Typography
              sx={{ color: "#1a75ff", fontWeight: "600", fontSize: "12px" }}
            >
              share
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default FishPardakht;
