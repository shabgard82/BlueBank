import { Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import afzayesh from "../../images/afzayesh.jpg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMoney } from "../../redux/slice/mali-slice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function MeghdarAfzayesh() {
  const schema = yup.object().shape({
    Cost: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [money, setMoney] = useState("0");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setIsFormValid(event.target.value !== "");
  };

  const handle = () => {
    navigate("/afzayesh");
    dispatch(addMoney(money));
  };
  const handleBack = () => navigate("/normal-charge");

  const handleChange = (event) => {
    setMoney(event.target.value);
    handleInputChange(event);
  };

  return (
    <form onSubmit={handleSubmit(handle)}>
      <Stack
        display="flex"
        direction="column"
        height="100vh"
        justifyContent="space-between"
      >
        <Stack>
          <Stack
            pl={1}
            pr={1}
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
          <Stack display="flex" direction="row" justifyContent="center" pt={3}>
            <img src={afzayesh} alt="profile" width="90px" height="80px" />
          </Stack>
          <Stack pl={1} pr={1}>
            <Typography pt={1} sx={{ fontWeight: "600", textAlign: "center" }}>
              Erfan Shabgard
            </Typography>
            <Typography
              sx={{ textAlign: "center", color: "gray", fontSize: "14px" }}
            >
              IR-14 0560 6118 2800 5528 6683 01
            </Typography>
            <input
              autoFocus
              {...register("Cost")}
              className={styles.input}
              placeholder="Deposit amount"
              onChange={handleChange}
            />
            {errors.Cost && (
              <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                {errors.Cost?.message}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Stack pl={2} pr={2} pb={2}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isFormValid}
            sx={{ fontWeight: "600", boxShadow: "none" }}
          >
            Continuation
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default MeghdarAfzayesh;
