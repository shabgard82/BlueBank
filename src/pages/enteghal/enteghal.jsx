import React from "react";
import styles from "./styles.module.css";
import MuiDrawer from "../bottom-drawer/drawer";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import SearchIcon from "@mui/icons-material/Search";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import transfer from "../../images/transfer.jpg";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function EnteghalVajh() {
  const navigate = useNavigate();
  const handle = () => navigate("/enteghal-khodkar");
  const handleClick = () => navigate("/enteghal-cart");
  return (
    <Stack
      pr={1}
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack display="flex" direction="row" alignItems="center">
            <IconButton>
              <MuiDrawer />
            </IconButton>
            <IconButton color="primary">
              <PendingActionsIcon onClick={handle} />
            </IconButton>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: "600" }}>transfer</Typography>
          </Stack>
          <Stack display="flex" direction="row" alignItems="center">
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
            <IconButton color="primary">
              <DocumentScannerIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Typography pt={3} pr={2} pl={2} sx={{ fontWeight: 555 }}>
          Recent destinations
        </Typography>
        <Stack pt={10}>
          <Stack display="flex" direction="row" justifyContent="center">
            <img src={transfer} width="200px" height="200px" />
          </Stack>
          <Stack>
            <Typography sx={{ textAlign: "center", fontWeight: "800" }}>
              You do not have a transfer destination
            </Typography>
            <Typography sx={{ textAlign: "center", color: "gray" }}>
              Make your first transfer
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack display="flex" direction="row" justifyContent="center" pb={10}>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ width: 160, padding: 1, fontWeight: "600" }}
          >
            New Transfer <AddIcon />
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
export default EnteghalVajh;
