import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ButtonHelper from "../components/ButtonHelper";

export default function Landing() {
  let navigate = useNavigate();

  function handleclicksignup(e) {
    e.preventDefault();
    navigate("/signup");
  }

  function handleclicksignin(e) {
    e.preventDefault();
    navigate("/signin");
  }
  return (
    <>
      <h1 style={{ fontSize: "100px" }}>Welcome</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="100px"
      >
        <Stack spacing={6} direction="row">
          <ButtonHelper
            variant="contained"
            action={handleclicksignup}
            text="Sign Up"
          />
          <ButtonHelper
            variant="contained"
            color="success"
            action={handleclicksignin}
            text="Log In"
          />
        </Stack>
      </Grid>
    </>
  );
}
