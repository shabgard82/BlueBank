import React, { useState } from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import hamrah from "../../images/hamrah.jpg";
import irancel from "../../images/irancel.jpg";
import shatel from "../../images/shatel.jpg";
import rightel from "../../images/rightel.jpg";

function NewChargeDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setisDrawerOpen(true)}>
        <ExpandMoreIcon fontSize="30" sx={{ color: "#317fe3" }} />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Stack>
          <Typography sx={{ fontWeight: "600", textAlign: "center" }} pt={2}>
            Operator
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            In case of transfer, choose a new operator
          </Typography>
          <Stack pt={2} pl={2} pb={3}>
            <Stack pt={3} display="flex" direction="row" alignItems="center">
              <img src={hamrah} width={"50px"} height={"50px"} />
              <Typography pl={2}>Hamrahe aval</Typography>
            </Stack>
            <Stack pt={3} display="flex" direction="row" alignItems="center">
              <img src={irancel} width={"50px"} height={"50px"} />
              <Typography pl={2}>Irancel</Typography>
            </Stack>
            <Stack pt={3} display="flex" direction="row" alignItems="center">
              <img src={rightel} width={"50px"} height={"50px"} />
              <Typography pl={2}>Rightel</Typography>
            </Stack>
            <Stack pt={2} display="flex" direction="row" alignItems="center">
              <img src={shatel} width={"50px"} height={"50px"} />
              <Typography pl={2}>Shatel Mobile</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack pl={1} pr={1} pb={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{ boxShadow: "none", fontWeight: "600" }}
          >
            Continuation
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
export default NewChargeDrawer;
