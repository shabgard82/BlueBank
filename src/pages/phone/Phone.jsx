import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "../bottom-drawer/drawer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addPhone } from "../../redux/slice/phone";


function PhoneNumber() {
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

  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");

  const onFormSubmit = (data) => {
    navigate("/sms-code");
    dispatch(addPhone(data.phone));
  };

  const handlePhone = (event) => {
    const phoneValue = event.target.value;
    setPhoneNumber(phoneValue);
  };

  const navigate = useNavigate();
  const handleBack = () => navigate("/start");

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

        <Typography pt={2}>Enter your phone number</Typography>
        <Stack>
          <input
            onChange={handlePhone}
            autoFocus
            {...register("phone")}
            className={styles.input}
            placeholder="like:98 939 537 7024"
          ></input>
          {errors.phone && (
            <Typography fontSize="13px" pt={1} sx={{ color: "red" }}>
              {errors.phone?.message}
            </Typography>
          )}
        </Stack>
      </Stack>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pb={3}
        >
          <Typography>confirmation code will be sent</Typography>
          <Stack>
            <IconButton
              sx={{ backgroundColor: "#4d94ff", color: "white" }}
              type="submit"
            >
              <ArrowForwardIcon sx={{ width: "30px", height: "30px" }} />
            </IconButton>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}
export default PhoneNumber;
