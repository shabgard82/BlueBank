import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Sefaresh() {
  const schema = yup.object().shape({
    postalCode: yup.string().min(6).max(8).required(),
    phone: yup
      .string()
      .required()
      .matches(/^\d{10}$/, "Phone number must be a 11-digit number"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("the form submited...");
    console.log(data);
    navigate("/virayesh-address");
  };
  const navigate = useNavigate();
  const handleBack = () => navigate("/animation");
  const handle = () => navigate("/virayesh-address");
  return (
    <Stack className={styles.all}>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ color: "#4d94ff" }}>
          <ArrowBackIcon onClick={handleBack} />
        </IconButton>
        <Typography sx={{ fontWeight: "600" }}>Blue Card order</Typography>
        <IconButton color="primary">
          <MuiDrawer />
        </IconButton>
      </Stack>
      <Typography pt={2}>
        Enter your postal code and landline phone number to receive a blue card
      </Typography>
      <Stack pt={2}>
        <Typography fontWeight={600}>postal code</Typography>
        <input
          autoFocus
          className={styles.input}
          placeholder="like:212967890"
          {...register("postalCode")}
        ></input>
        {errors.postalCode && (
          <Typography fontSize="13px" color="red" pt={1}>
            {errors.postalCode?.message}
          </Typography>
        )}
      </Stack>
      <Stack pt={2}>
        <Typography fontWeight={600}>fixed telephone</Typography>
        <input
          {...register("phone")}
          className={styles.input}
          placeholder="like:98 939 537 7024"
        ></input>
        {errors.phone && (
          <Typography fontSize="13px" color="red" pt={1}>
            {errors.phone?.message}
          </Typography>
        )}
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack pt={7}>
          <Button
            variant="contained"
            sx={{ fontWeight: 500, boxShadow: "none" }}
            type="submit"
          >
            confirm and continue
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default Sefaresh;
