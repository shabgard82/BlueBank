import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiDrawer from "../bottom-drawer/drawer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import NewChargeDrawer from "../new-charge-drawer/newcharge-drawer";

function NewCharge() {
  const schema = yup.object().shape({
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
    navigate("/sms-code");
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/charge");

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
          <Typography sx={{ fontWeight: "600" }}>Charge</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>

        <Typography pt={2}>Enter your SIM Cart phone number</Typography>
        <Stack>
          <div className={styles.input}>
            {" "}
            <input
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
              {...register("phone")}
              placeholder="like:98 939 537 7024"
            ></input>
            <NewChargeDrawer />
          </div>
          {errors.phone && <p style={{color:'red', fontSize:'13px'}}>{errors.phone?.message}</p>}
        </Stack>
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack pl={1} pr={1} pb={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{ boxShadow: "none", fontWeight: "600" }}
          >
            Continuation
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
export default NewCharge;
