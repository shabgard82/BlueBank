import React from "react";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography, sliderClasses } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function InviteCode() {
  const schema = yup.object().shape({
    code: yup
      .string()
      .matches(
        /^[A-Z]{6}$/,
        "Code must be a 6-character string consisting of uppercase letters"
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    navigate("/national-code");
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/sms-code");

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
        <Typography pt={2}>Enter your invite code</Typography>
        <input
          autoFocus
          className={styles.input}
          placeholder="like : MDMGKP"
          {...register("code")}
        ></input>
        {errors.code && (
          <Typography fontSize="13px" pt={1} sx={{ color: "red" }}>
            {errors.code?.message}
          </Typography>
        )}
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
export default InviteCode;
