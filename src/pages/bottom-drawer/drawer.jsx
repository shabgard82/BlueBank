import React from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import ChatIcon from "@mui/icons-material/Chat";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import QuizIcon from "@mui/icons-material/Quiz";

function MuiDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
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
            <Typography sx={{ color: "#8c8c8c", fontWeight: '600'}}>
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
            <Typography fontSize={15} fontWeight={600}>chat</Typography>
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
            <Typography fontSize={15} fontWeight={600}>call</Typography>
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
            <Typography fontSize={15} fontWeight={600}>Frequently questions</Typography>
          </Stack>
          <Stack pt={1} pb={2}>
            <Button variant="contained" disabled sx={{ fontWeight:700 }}>
              cancel
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default MuiDrawer;
