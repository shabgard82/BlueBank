import React, { useState } from "react";
import { Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import boxx from "../../images/boxx.jpg";
import mojodihesab from "../../images/mojodihesab.jpg";
import mojodiekol from "../../images/mojodiekol.jpg";
import ghabelbardasht from "../../images/ghabelbardasht.jpg";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function HomeDrawer() {
  const { transactionList } = useSelector((state) => state.transactionSlice);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const totalAmount = transactionList.reduce((accumulator, transaction) => {
    return accumulator + parseInt(transaction.amount);
  }, 0);

  return (
    <>
      <IconButton onClick={() => setisDrawerOpen(true)}>
        <ExpandMoreIcon fontSize="30" sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={4}
            pr={2}
            pl={2}
          >
            <Stack display="flex" direction="row" alignItems="center">
              <img src={mojodiekol} className={styles.img1} />
              <Typography pl={2}>Total inventory</Typography>
            </Stack>
            <Stack>
              <Typography> {totalAmount} $</Typography>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={3}
            pr={2}
            pl={2}
          >
            <Stack display="flex" direction="row" alignItems="center">
              <img src={mojodihesab} className={styles.img1} />
              <Typography pl={2}>Balance</Typography>
            </Stack>
            <Stack>
              <Typography>{totalAmount} $ </Typography>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={3}
            pr={2}
            pl={2}
          >
            <Stack display="flex" direction="row" alignItems="center">
              <img src={boxx} className={styles.img1} />
              <Typography pl={2}>Inventory of boxes</Typography>
            </Stack>
            <Stack>
              <Typography>0 $</Typography>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={3}
            pr={2}
            pl={2}
            pb={3}
          >
            <Stack display="flex" direction="row" alignItems="center">
              <img src={ghabelbardasht} className={styles.img1} />
              <Typography pl={2}>Withdrawal balance</Typography>
            </Stack>
            <Stack>
              <Typography> {totalAmount} $</Typography>
            </Stack>
          </Stack>
        </stack>
      </Drawer>
    </>
  );
}
export default HomeDrawer;
