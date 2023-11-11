import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import CardDrawer from "../carddrawer/card-drawer";
import { useNavigate } from "react-router-dom";
import { submit as submitTransaction } from "../../redux/slice/transaction-slice";
import { update as updateCardDate } from "../../redux/slice/active-card-slice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function AfzayeshMojodi() {
  const schema = yup.object().shape({
    cvv2: yup
      .string()
      .matches(/^\d{3,4}$/)
      .required(),
    date: yup
      .string()
      .matches(/^\d{2}\/\d{2}$/)
      .required(),
    password: yup.string().min(4).max(6).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const handleBack = () => navigate("/meghdar-afzayesh");
  const [cartdate, setCartDate] = useState("");
  const dispatch = useDispatch();
  const { cardDate } = useSelector((state) => state.cardSlice);
  const { Money } = useSelector((state) => state.maliSlice);
  const cardNumber = useSelector((state) => state?.numberSlice?.cardNumber);

  const handleCartDateChange = (e) => {
    setCartDate(e.target.value);
  };

  const watchAllFields = watch();

  const isFormValid = Object.values(watchAllFields).every(Boolean) && isDirty;

  const handleSubmit11 = () => {
    dispatch(
      submitTransaction({
        amount: Money,
        datetime: new Date(),
      })
    );
    navigate("/fish-pardakht");
  };

  return (
    <form onSubmit={handleSubmit(handleSubmit11)}>
      <Stack
        display="flex"
        direction="column"
        height="100vh"
        justifyContent="space-between"
      >
        <Stack pl={1} pr={1}>
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
            <Typography sx={{ fontWeight: "600" }}>
              Inventory increase
            </Typography>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
          <Stack>
            <Typography pt={2} pl={1}>
              Enter the bank card number
            </Typography>
          </Stack>
          <Stack pt={1} pl={1} pr={1}>
            <Typography
              pt={1}
              pl={1}
              sx={{ color: "#666666" }}
              fontWeight={600}
              fontSize={13}
            >
              card number
            </Typography>
            <div className={styles.input}>
              <input
                value={cardNumber}
                style={{
                  color: "#666666",
                  width: "100%",
                  height: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
              ></input>
            </div>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              pl={1}
              pr={1}
              display="flex"
              direction="row"
              alignItems="center"
              pt={2}
              spacing={2}
            >
              <Stack display="flex" direction="column">
                <Typography pl={1} fontWeight={600} fontSize="12px" pb={1}>
                  CVV2
                </Typography>
                <input
                  autoFocus
                  {...register("cvv2")}
                  className={styles.input1}
                  placeholder="password"
                />
                {errors.cvv2 && (
                  <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                    {errors.cvv2?.message}
                  </Typography>
                )}
              </Stack>

              <Stack display="flex" direction="column">
                <Typography fontWeight={600} fontSize="12px" pl={1} pb={1}>
                  Expiration date
                </Typography>
                <Stack
                  display="flex"
                  Afzayesh
                  direction="row"
                  justifyContent="space-around"
                  className={styles.inputContainer}
                >
                  <input
                    {...register("date")}
                    placeholder="Year/Month"
                    onChange={handleCartDateChange}
                    className={styles.input1}
                  />
                </Stack>
                {errors.date && (
                  <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                    {errors.date?.message}
                  </Typography>
                )}
              </Stack>

              {cardDate.map((item) => (
                <h3
                  style={{
                    backgroundColor: "yellow",
                    border: "2px solid black",
                    borderRadius: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  {item}
                </h3>
              ))}
            </Stack>
          </Stack>
          <Stack
            pt={2}
            display="flex"
            direction="row"
            alignItems="center"
            pl={1}
            pr={1}
          >
            <Stack display="flex" direction="column">
              <Typography pl={1} fontWeight={600} fontSize="12px" pb={1}>
                second password
              </Typography>
              <input
                {...register("password")}
                className={styles.input1}
                placeholder="dynamic password"
              />
              {errors.password && (
                <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                  {errors.password?.message}
                </Typography>
              )}
            </Stack>

            <Stack pl={4} pt={3}>
              <Typography
                fontSize="12px"
                fontWeight={600}
                sx={{ color: "#317fe3" }}
              >
                Dynamic password request
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack pl={2} pr={2} pb={2}>
          <Button
            sx={{ fontWeight: "600", boxShadow: "none" }}
            variant="contained"
            type="submit"
            disabled={!isFormValid}
          >
            Continuation
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default AfzayeshMojodi;
