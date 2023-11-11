import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CopyToClipboardButton from "../../components/copy-To-Clipboard/copyToClipboard";
import daryaft from "../../images/daryaft.jpg";
import likeGift from "../../images/likeGift.jpg";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";


function InviteFriend() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/profile");
  return (
    <>
      <Stack
        className={styles.body}
        display="flex"
        direction="row"
        justifyContent="space-between"
      >
        <ArrowBackIcon
          onClick={handleBack}
          sx={{ color: "white", marginLeft: "15px", marginTop: "15px" }}
        />
        <Stack>
          <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
            <MuiDrawer />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="column"
        justifyContent="space-between"
        pl={1}
        pr={1}
      >
        <Stack display="flex" direction="column" pt={2}>
          <Typography sx={{ textAlign: "center" }} fontWeight={600}>
            Invite
          </Typography>
          <Typography sx={{ textAlign: "center", color: "gray" }} pr={2} pl={2}>
            Invite 10 of your friends to Blue and get 30,000 $ as a gift for
            each successful account opening
          </Typography>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        pt={3}
      >
        <Stack>
          <img src={likeGift} className={styles.gift} />
        </Stack>
        <Stack>
          <img src={daryaft} className={styles.gift} />
        </Stack>
      </Stack>

      <Stack style={{ display: "flex", alignItems: "center" }} pt={4}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={styles.code}
        >
          <Typography fontWeight={600} color="gray" pr={1}>
            Invite Code :
          </Typography>
          <Typography fontWeight={600}>NFZ XGY</Typography>
          <CopyToClipboardButton />
        </Stack>
      </Stack>
      <Stack mt={23} pr={1} pl={1}>
        <Button variant="contained" sx={{ fontWeight: 500 }}>
          sending invitation
        </Button>
      </Stack>
    </>
  );
}
export default InviteFriend;
