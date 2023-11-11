import React, { useState } from "react";
import { Drawer, IconButton, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pasargad from "../../images/pasargadd.png";
import meli from "../../images/melii.png";
import sepah from "../../images/sepahh.png";
import saderat from "../../images/saderatt.png";
import maskan from "../../images/maskann.png";
import eghtesadnovin from "../../images/eghtesadnovinn.png";
import parsian from "../../images/parsiann.png";
import ansar from "../../images/ansar.png";
import shahr from "../../images/shahrr.png";
import melat from "../../images/melatt.png";
import dey from "../../images/deyy.png";
import refah from "../../images/refahh.png";
import { useDispatch, useSelector } from "react-redux";
import plus from "../../images/plus.jpg";
import { useNavigate } from "react-router-dom";
import { setCardNumber } from "../../redux/slice/cardnumber";

const cardData = {
  5022: { image: pasargad, name: "Pasargad Bank" },
  6037: { image: meli, name: "Bank Melli Iran" },
  5892: { image: sepah, name: "Sepah Bank" },
  6276: { image: saderat, name: "Bank Saderat Iran" },
  6280: { image: maskan, name: "Bank Maskan" },
  6274: { image: eghtesadnovin, name: "Eghtesad Novin Bank" },
  6221: { image: parsian, name: "Parsian Bank" },
  6273: { image: ansar, name: "Ansar Bank" },
  5028: { image: shahr, name: "Shahr Bank" },
  6104: { image: melat, name: "Bank Melat" },
  5029: { image: dey, name: "Dey Bank" },
  5894: { image: refah, name: "Refah Bank" },
};

function getCardDataByCardNumber(cardNumber) {
  const firstFourDigits = cardNumber.substring(0, 4);
  return cardData[firstFourDigits];
}

function CardDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/normal-charge");
    setisDrawerOpen(false);
  };
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const { cardItems } = useSelector((state) => state.cardSlice);

  const handleText = (event) => {
    const newText = event.target.textContent;
    dispatch(setCardNumber(newText));
  };

  return (
    <Stack>
      <IconButton onClick={() => setisDrawerOpen(true)}>
        <ExpandMoreIcon fontSize="30" sx={{ color: "#317fe3" }} />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Stack overflow-y="scroll" height="400px" pb={2}>
          <Stack pt={2}>
            <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
              choose a bank card
            </Typography>
            <Typography sx={{ color: "gray", textAlign: "center" }}>
              You recently used the following bank cards
            </Typography>
          </Stack>
          <Stack
            onClick={handleClick}
            pl={2}
            pt={2}
            display="flex"
            direction="row"
            alignItems="center"
          >
            <img src={plus} width="40px" height="40px" />
            <Typography sx={{ color: "#4269f5" }} pl={2}>
              New bank card
            </Typography>
          </Stack>
          <Stack pl={1} pr={2}>
            {cardItems.map((item) => {
              const cardData = getCardDataByCardNumber(item);
              return (
                <Stack key={item} pl={2} pb={2} pt={2}>
                  <Stack display="flex" direction="row" alignItems="center">
                    <Stack>
                      <img src={cardData.image} width="30px" height="30px" />
                    </Stack>
                    <Stack pl={3}>
                      <Typography
                        onClick={handleText}
                        fontSize={"18px"}
                        key={item}
                        textAlign="center"
                      >
                        {item}
                      </Typography>
                      <Typography color="gray" fontSize="14px">
                        {cardData.name}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
}
export default CardDrawer;
