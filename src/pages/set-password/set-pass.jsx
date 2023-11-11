import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SetPassword() {
  const schema = yup.object().shape({
    password: yup.string().min(4).max(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    navigate("/fingerprint");
  };
  const navigate = useNavigate();
  const handleBack = () => navigate("/create-username");
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
        <Typography pt={2}>Choose a secure password for yourself</Typography>
        <input
          autoFocus
          {...register("password")}
          type="password"
          className={styles.input}
          placeholder="password"
        ></input>
        {errors.password && (
          <Typography fontSize="13px" pt={1} sx={{ color: "red" }}>
            {errors.password?.message}
          </Typography>
        )}
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={3}
        >
          <Typography>
            Your password is the same as your bank password !
          </Typography>
          <Stack>
            <IconButton sx={{ color: "#4d94ff" }} type="submit">
              <CheckCircleIcon sx={{ width: "54px", height: "54px" }} />
            </IconButton>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}
export default SetPassword;
