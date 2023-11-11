import React from "react";
import styles from "./styles.module.css";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function VirayeshAddress() {
  const schema = yup.object().shape({
    city: yup.string().required(),
    mainStreet: yup.string().required(),
    subStreet: yup.string().required(),
    block: yup.string().min(1).max(5).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("the form submited...");
    console.log(data);
    navigate("/entekhab-zaman");
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/sefaresh");
  const handle = () => navigate("/entekhab-zaman");
  return (
    <Stack className={styles.all}>
      <Stack>
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
            <Typography sx={{ fontWeight: "600" }}>Blue Card order</Typography>
            <IconButton color="primary">
              <MuiDrawer />
            </IconButton>
          </Stack>
          <Typography pt={2}>Edit your address if needed</Typography>
          <Stack pt={3}>
            <Typography fontWeight={500}>Province , City</Typography>
            <input
              autoFocus
              className={styles.input}
              placeholder="tehran,tehran"
              {...register("city")}
            ></input>
            {errors.city && (
              <Typography fontSize="13px" color="red" pt={1}>
                {errors.city?.message}
              </Typography>
            )}
          </Stack>
          <Stack pt={3}>
            <Typography fontWeight={500}>District , main street</Typography>
            <input
              className={styles.input}
              placeholder="1,tajrish"
              {...register("mainStreet")}
            ></input>
            {errors.mainStreet && (
              <Typography fontSize="13px" color="red" pt={1}>
                {errors.mainStreet?.message}
              </Typography>
            )}
          </Stack>
          <Stack pt={3}>
            <Typography fontWeight={500}>Sub street , alley , no</Typography>
            <input
              className={styles.input}
              placeholder="mail street,4"
              {...register("subStreet")}
            ></input>
            {errors.subStreet && (
              <Typography fontSize="13px" color="red" pt={1}>
                {errors.subStreet?.message}
              </Typography>
            )}
          </Stack>
          <Stack pt={5}>
            <Typography fontWeight={500}>Block , floor , unit</Typography>
            <input
              className={styles.input}
              placeholder="4,2,5"
              {...register("block")}
            ></input>
            {errors.block && (
              <Typography fontSize="13px" color="red" pt={1}>
                {errors.block?.message}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack pb={2}>
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
export default VirayeshAddress;
