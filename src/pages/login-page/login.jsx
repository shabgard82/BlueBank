import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import images from "../../images/blue-bank.jpg";
import { Button } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slice/user-slice";

function Login() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4).max(8).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");

  const onFormSubmit = () => {
    navigate("/home");
    dispatch(addUser(username));
  };

  const handleClick = () => {
    navigate("/forget-information");
  };

  const handleUser = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Stack
      display="flex"
      direction="column"
      justifyContent="space-between"
      height="100vh"
      pl={2}
      pr={2}
    >
      <Stack>
        <Stack display="flex" direction="row" justifyContent="flex-end">
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>

        <Stack>
          <Stack display="flex" flex-direction="row" justify-content="center">
            <img src={images} width="100%" height="230px"></img>
            <Stack>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <Stack className={styles.inputContainer}>
                  <input
                    onChange={handleUser}
                    autoFocus
                    {...register("username")}
                    className={styles.input}
                    placeholder="username"
                    type="text"
                  ></input>
                  {errors.username && (
                    <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                      {errors.username?.message}
                    </Typography>
                  )}
                  <Divider className={styles.divider} />
                  <input
                    {...register("password")}
                    className={styles.input}
                    placeholder="password"
                    type="password"
                  ></input>
                  {errors.password && (
                    <Typography fontSize="13px" pl={2} sx={{ color: "red" }}>
                      {errors.password?.message}
                    </Typography>
                  )}
                </Stack>
                <Stack pt={3}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ fontWeight: 600 }}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Stack>

            <Stack pt={1}>
              <Button
                variant="primary"
                onClick={handleClick}
                sx={{ color: "#4d94ff", fontSize: "15px", fontWeight: 550 }}
              >
                I need help
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack display="flex" direction="row" justifyContent="center" pb={2}>
        <Typography sx={{ color: "gray", fontWeight: "600", fontSize: "12px" }}>
          Neo Bank Saman
        </Typography>
      </Stack>
    </Stack>
  );
}
export default Login;
