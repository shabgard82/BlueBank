import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import PadashSlider from "../padash-slider/slider";
import first from "../../images/first.jpg";
import second from "../../images/second.jpg";
import third from "../../images/third.jpg";
import five from "../../images/five.jpg";
import fourth from "../../images/fourth.jpg";
import six from "../../images/six.jpg";
import seven from "../../images/seven.jpg";
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import tree from "../../images/tree.jpg";
import four from "../../images/four.jpg";
import fivee from "../../images/fivee.jpg";
import sixx from "../../images/sixx.jpg";
import sevenn from "../../images/sevenn.jpg";
import eight from "../../images/eight.jpg";
import location from "../../images/location.jpg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function Reward() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/qrcode-scan");
  const handle = () => navigate("/otaghak");
  const handle1 = () => navigate("/meghdad");
  const handle2 = () => navigate("/sibook");
  const handle3 = () => navigate("/zara");
  const handle4 = () => navigate("/some-home");
  const handle5 = () => navigate("/pet-style");
  const handle6 = () => navigate("/neko-men");

  return (
    <Stack>
      <Stack
        pr={1}
        pt={1}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <IconButton color="primary">
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
        </Stack>
        <Stack>
          <Typography sx={{ textAlign: "center", fontWeight: "500" }}>
            Reward
          </Typography>
        </Stack>
        <Stack>
          <MuiDrawer />
        </Stack>
      </Stack>
      <Stack>
        <PadashSlider />
      </Stack>
      <Stack>
        <Typography pl={2} sx={{ fontWeight: "600" }}>
          Online stores
        </Typography>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        overflow="auto"
        width="100%"
        alignItems="center"
      >
        <Stack pl={3} pr={2} onClick={handle}>
          <img src={first} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            room
          </Typography>
        </Stack>
        <Stack pl={3} pr={2} onClick={handle1}>
          <img src={five} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Kenrik
          </Typography>
        </Stack>
        <Stack pl={3} pr={2} onClick={handle2}>
          <img src={six} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Sibook
          </Typography>
        </Stack>
        <Stack pl={3} pr={3} onClick={handle3}>
          <img src={seven} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Zara
          </Typography>
        </Stack>
        <Stack pl={3} pr={2} onClick={handle4}>
          <img src={second} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            SomHom
          </Typography>
        </Stack>
        <Stack pl={3} pr={2} onClick={handle5}>
          <img src={fourth} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            pet style
          </Typography>
        </Stack>
        <Stack pl={3} pr={2} onClick={handle6}>
          <img src={third} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Neko men
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography pt={4} pl={2} sx={{ fontWeight: "600" }}>
          Best sellers
        </Typography>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        overflow="auto"
        width="100%"
        pt={2}
        alignItems="center"
      >
        <Stack pl={3} pr={2}>
          <img src={one} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            sinoor
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={two} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Nool lanj
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={tree} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Cafe
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={four} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            restaurant
          </Typography>
        </Stack>
        <Stack pl={3} pr={3}>
          <img src={fivee} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Senso
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={sixx} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            meykhosh
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={sevenn} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            roast
          </Typography>
        </Stack>
        <Stack pl={3} pr={2}>
          <img src={eight} width="80px" height="100px" />
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Nezo
          </Typography>
        </Stack>
      </Stack>
      <Stack pt={2} pb={1}>
        <Typography pl={2} sx={{ fontWeight: "600" }}>
          Stores near you
        </Typography>
      </Stack>
      <Stack
        display="flex"
        direction="column"
        className={styles.location}
        pb={2}
      >
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack>
            <Typography sx={{ fontWeight: "600" }}>Location access</Typography>
            <Typography sx={{ color: "gray" }}>
              Enable your location access<br></br> to see the nearest stores
            </Typography>
          </Stack>
          <Stack>
            <img src={location} width="70px" height="90px" />
          </Stack>
        </Stack>
        <Stack pl={3} pt={1} pb={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#cce6ff",
              boxShadow: "none",
              color: "blueviolet",
              width: 80,
              padding: 1,
              fontWeight: "600",
            }}
          >
            Active
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Reward;
