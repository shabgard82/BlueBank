import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import transfer from '../../images/transfer.jpg';

function Baygani() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/enteghal-khodkar");
  return (
    <Stack>
      <Stack
        pl={1}
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
          <Typography sx={{ textAlign: "center" ,fontWeight:"500"}}>
          Archive
          </Typography>
        </Stack>
        <Stack display="flex" direction="row" alignItems="center">
          <IconButton>
            <MuiDrawer />
          </IconButton>
        </Stack>
      </Stack>
      <Stack display='flex' direction='row' justifyContent='center' pt={12}>
        <img src={transfer} width='200px' height='200px' />
      </Stack>
      <Typography sx={{textAlign:'center', fontWeight:'600'}}>You do not have a transfer in the future</Typography>
      <Typography sx={{color:'gray',textAlign:'center'}}>Make your first transfer</Typography>
    </Stack>
  );
}
export default Baygani;
