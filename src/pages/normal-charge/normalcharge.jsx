import { Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import React, { useEffect, useState } from "react";
import CardDrawer from "../carddrawer/card-drawer";
import { addToCard } from "../../redux/slice/card-slice";
import { addCard } from "../../redux/slice/show-cardnumber";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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

function NormalCharge() {
  const schema = yup.object().shape({
    Cart: yup
      .string()
      .required("Card number is required")
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [cartnumber, setCartNumber] = useState("");
  const [oneCart, setOneCart] = useState("");
  const [all, setAll] = useState("");
  const newText = useSelector((state) => state.cardNumberSlice.Card);
  const [isFormValid, setIsFormValid] = useState(!!cartnumber || !!newText);

  const handleChange = (e) => {
    const enteredCardNumber = e.target.value;
    const formattedCardNumber = enteredCardNumber
    .replace(/\s/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
    setCartNumber(formattedCardNumber);
    setAll(formattedCardNumber.slice(0, 4));
    setOneCart(formattedCardNumber);
    handleInputChange(e);
    setIsFormValid(!!formattedCardNumber || !!newText);
  };


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit1 = () => {
    dispatch(addToCard(cartnumber));
    dispatch(addCard(oneCart));
    navigate("/meghdar-afzayesh");
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleInputChange = (event) => {
    setIsFormValid(event.target.value !== "");
  };

  return (
    <form onSubmit={handleSubmit(handleSubmit1)}>
      <Stack className={styles.all} pl={1} pr={1}>
        <Stack>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <IconButton sx={{ color: "#4d94ff" }}>
                <ArrowBackIcon onClick={handleBack} />
              </IconButton>
            </Stack>
            <Typography fontWeight="600">Inventory increase</Typography>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
          <Stack>
            <Typography pt={2} pl={1}>
              Enter the bank card number
            </Typography>
            <div className={styles.input}>
              <input
                value={cartnumber || newText}
                autoFocus
                {...register("Cart")}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                placeholder="16-digit card number"
              />

              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                sx={{ backgroundColor: "transparent" }}
              >
                {all && (
                  <img
                    src={cardData[all]?.image}
                    alt="Bank Card"
                    width="20px"
                    height="20px"
                  />
                )}
                <CardDrawer />
              </Stack>
            </div>
            {errors.Cart && (
              <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                {errors.Cart?.message}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack pb={2} pl={1} pr={1}>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: "600", boxShadow: "none" }}
            disabled={!isFormValid}
          >
            Continuation
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default NormalCharge;
