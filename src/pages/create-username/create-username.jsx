import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CreateUsername() {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .matches(/^[a-zA-Z0-9]+$/, "Invalid username format"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    navigate("/set-password");
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/date");

  return (
    <Stack className={styles.all}>
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#317fe3" }}>
            <ArrowBackIcon onClick={handleBack} />
          </IconButton>
          <Typography sx={{fontWeight:'600'}}>Create account</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={2}>
          <Typography>Enter your favorite username</Typography>
          <input
            autoFocus
            className={styles.input}
            placeholder="like : Blue1234"
            {...register("username")}
          ></input>
          {errors.username && (
            <Typography fontSize="13px" pt={1} sx={{ color: "red" }}>
              {errors.username?.message}
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
            sx={{ backgroundColor: "#317fe3", color: "white" }}
            type="submit"
          >
            <ArrowForwardIcon sx={{ width: "30px", height: "30px" }} />
          </IconButton>
        </Stack>
      </form>
    </Stack>
  );
}
export default CreateUsername;
