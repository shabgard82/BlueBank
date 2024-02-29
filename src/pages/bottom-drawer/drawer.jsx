import React from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";

function MuiDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const handleClose = () => {
    setisDrawerOpen(false);
  };
  return (
    <>
      <IconButton color="primary" onClick={() => setisDrawerOpen(true)}>
        <HelpIcon fontSize="30" />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Stack pl={2} pr={2}>
          <Stack
            pt={1}
            pb={1}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography fontWeight={800}>Blue line</Typography>
            <Typography sx={{ color: "#8c8c8c", fontWeight: "500" }}>
              Always on time every where
            </Typography>
          </Stack>
          <Divider />
          <Stack
            pt={1}
            pb={1}
            display="flex"
            direction="row"
            alignItems="center"
          >
            <IconButton color="#cccccc" pr={1}>
              <ChatIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Link
              to="https://chat.blubank.com/c/BlBank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography fontSize={15} pl={1}>
                chat
              </Typography>
            </Link>
          </Stack>
          <Divider />
          <Stack
            pt={1}
            pb={1}
            display="flex"
            direction="row"
            alignItems="center"
          >
            <IconButton color="gray">
              <RingVolumeIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Link
              to="https://www.sb24.ir/e-services/e-banking/blubank"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography fontSize={15} pl={1}>
                call
              </Typography>
            </Link>
          </Stack>
          <Divider />
          <Stack
            pt={1}
            pb={1}
            display="flex"
            direction="row"
            alignItems="center"
          >
            <IconButton>
              <QuizIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Link
              to="https://blubank.sb24.ir/faq"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography fontSize={15} pl={1}>
                Frequently questions
              </Typography>
            </Link>
          </Stack>
          <Stack pt={1} pb={2}>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                fontWeight: 700,
                backgroundColor: "#ccf5ff",
                color: "#317fe3",
                boxShadow: "none",
              }}
            >
              cancel
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default MuiDrawer;
