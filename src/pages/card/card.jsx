import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import CardSlider from "../card-slider/cardslider";
import KeyIcon from "@mui/icons-material/Key";
import ShareIcon from "@mui/icons-material/Share";
import masdood from "../../images/masdood.jpg";
import setting from "../../images/setting.jpg";
import change from "../../images/change.jpg";
import deactive from "../../images/deactive.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";

function Card() {
  return (
    <Stack height="100vh">
      <Stack sx={{ backgroundColor: "#f3f7f6" }}>
        <Stack display="flex" direction="row" alignItems="center">
          <Stack display="flex" direction="row">
            <IconButton>
              <MuiDrawer />
            </IconButton>
          </Stack>
          <Typography
            sx={{
              fontWeight: "600",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            Card
          </Typography>
        </Stack>
        <Stack>
          <CardSlider />
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        pr={2}
        pl={2}
        pt={1}
      >
        <Stack
          display="flex"
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#ccf5ff",
            padding: "5px 50px",
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <IconButton sx={{ color: "#1a75ff" }}>
            <KeyIcon />
          </IconButton>
          <Typography
            sx={{ color: "#1a75ff", fontWeight: "600", fontSize: "12px" }}
          >
            password
          </Typography>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          alignItems="center"
          sx={{
            backgroundColor: "#ccf5ff",
            padding: "5px 50px",
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <IconButton sx={{ color: "#1a75ff" }}>
            <ShareIcon />
          </IconButton>
          <Typography
            sx={{ color: "#1a75ff", fontWeight: "600", fontSize: "12px" }}
          >
            card Num
          </Typography>
        </Stack>
      </Stack>
      <Typography pl={2} pt={4} sx={{ fontWeight: "600" }}>
        Settings
      </Typography>
      <Stack
        pt={3}
        pl={2}
        pr={2}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <img src={masdood} width="40px" height="40px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "500" }}>Temporary blocking</Typography>
          <Typography sx={{ color: "gray" }}>
            Temporarily deactivate Blue Card
          </Typography>
        </Stack>
        <Stack>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
      <Stack
        pt={3}
        pl={2}
        pr={2}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <img src={setting} width="40px" height="40px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "500" }}>Security settings</Typography>
          <Typography sx={{ color: "gray" }}>
            Changing and retrieving password
          </Typography>
        </Stack>
        <Stack>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
      <Stack
        pt={3}
        pl={2}
        pr={2}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <img src={change} width="40px" height="40px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "500" }}>
            Blue card replacement
          </Typography>
          <Typography sx={{ color: "gray" }}>
            You can order a new blue card
          </Typography>
        </Stack>
        <Stack>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>
      <Stack
        pt={3}
        pl={2}
        pr={2}
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <img src={deactive} width="40px" height="40px" />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: "500", color: "#cc0000" }}>
            deactivate
          </Typography>
          <Typography sx={{ color: "gray" }}>
            You can order a new blue card
          </Typography>
        </Stack>
        <Stack>
          <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
        </Stack>
      </Stack>

      <Stack sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
export default Card;
