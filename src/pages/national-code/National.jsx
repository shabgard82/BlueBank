import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function NationalCode() {
  const schema = yup.object().shape({
    number: yup
      .string()
      .matches(/^\d{10}$/, "Number must be a 10-digit string")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    navigate("/date");
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/invite-code");

  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#4d94ff" }}>
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
          <Typography sx={{ fontWeight: "600" }}>Create account</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography>Enter your national code</Typography>
          <input
            autoFocus
            {...register("number")}
            className={styles.input}
            placeholder="national code is ten digits"
          ></input>
          {errors.number && (
            <Typography fontSize="13px" pt={1} sx={{ color: "red" }}>
              {errors.number?.message}
            </Typography>
          )}
        </Stack>
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className={styles.btn}
          pb={3}
        >
          <IconButton
            sx={{ backgroundColor: "#4d94ff", color: "white" }}
            type="submit"
          >
            <ArrowForwardIcon sx={{ width: "30px", height: "30px" }} />
          </IconButton>
        </Stack>
      </form>
    </Stack>
  );
}
export default NationalCode;
