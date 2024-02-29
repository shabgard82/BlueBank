import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ShareIcon from "@mui/icons-material/Share";
import MuiDrawer from "../bottom-drawer/drawer";
import profile from "../../images/profile.jpg";
import mokhatab from "../../images/mokhatab.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import tik from "../../images/tik.jpg";
import zang from "../../images/zang.jpg";
import paint from "../../images/paint.jpg";
import gift from "../../images/gift.jpg";
import quiz from "../../images/quiz.jpg";
import some from "../../images/some.jpg";
import b from "../../images/b.jpg";
import javayez from "../../images/javayez.jpg";
import { useNavigate } from "react-router-dom";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";
import SuportDrawer from "../support-drawer/support-drawer";
import { useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  const handle = () => navigate("/etelaat");
  const handle1 = () => navigate("/amniat");
  const handle2 = () => navigate("/notice");
  const handle3 = () => navigate("/show-blue-bank");
  const handle4 = () => navigate("/blue-club");
  const handle5 = () => navigate("/invite-friend");
  const handleEnd = () => navigate("/ghavanin");
  const username = useSelector((state) => state.userSlice.username);
  const phonenumber = useSelector((state) => state.PhoneSlice.phonenumber);

  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Stack className={styles.all}>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <IconButton color="primary">
              <QrCodeScannerIcon />
              <Stack width="40px"></Stack>
            </IconButton>
          </Stack>
          <Stack justifyContent="center" sx={{ fontWeight: "600" }}>
            Profile
          </Stack>
          <Stack display="flex" direction="row" justifyContent="end">
            <Stack>
              <IconButton color="primary">
                <MuiDrawer />
                <ShareIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Stack display="flex" direction="row" justifyContent="center">
          <img src={profile} className={styles.img3} />
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={2}
        >
          <Typography sx={{ fontWeight: "600" }}>{username}</Typography>
          <Typography sx={{ color: "gray" }}>{phonenumber}</Typography>
        </Stack>
      </Stack>
      <Stack className={styles.part}>
        <Stack pl={0.5} pr={0.5}>
          <img src={javayez} className={styles.img} />
          <Stack>
            <Typography pl={2} pt={2} fontWeight={600}>
              Settings
            </Typography>
          </Stack>
          <Stack pt={2}>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={1}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                onClick={handle}
              >
                <img src={mokhatab} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>account</Typography>
                  <Typography sx={{ color: "gray" }}>
                    bank information and personal info
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                onClick={handle1}
              >
                <img src={tik} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>security and privacy</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Password and fingerprint
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                onClick={handle2}
              >
                <img src={zang} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Notices</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Settings and notifications
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                onClick={handle3}
              >
                <img src={paint} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Blue Bank show</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Day and night mode
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Typography pl={2} fontWeight={600} pt={3}>
              General
            </Typography>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
              onClick={handle4}
            >
              <Stack display="flex" direction="row" alignItems="center">
                <img src={gift} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Blue Club</Typography>
                  <Typography sx={{ color: "gray" }}>
                    More activity , more reward
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack display="flex" direction="row" alignItems="center">
                <img src={quiz} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Support</Typography>
                  <Typography sx={{ color: "gray" }}>
                    chat,call and asked frequently question
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <SuportDrawer sx={{ color: "gray", fontSize: "20px" }} />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                onClick={handle5}
              >
                <img src={some} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Invite friends</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Receive gifts by inviting friends
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pl={1}
              pt={3}
              pr={1}
            >
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                pb={3}
                onClick={handleEnd}
              >
                <img src={b} className={styles.img1} />
                <Stack display="flex" direction="column" pl={1}>
                  <Typography>Blue Bank</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Terms and conditions, about us
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <ArrowForwardIosIcon sx={{ color: "gray" }} fontSize="30" />
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ textAlign: "center" }} pb={2}>
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              Version 2.4.0
            </Typography>
            <Typography sx={{ color: "gray", fontSize: 13 }}>
              Made with in Iran
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
export default Profile;
