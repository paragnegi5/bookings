import React from "react";
import Stack from "@mui/material/Stack";
import ButtonHelper from "../components/ButtonHelper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let history = useNavigate();
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));

  function handlebookaslot() {
    history("/bookslot");
  }

  function handlecancelaslot() {
    history("/cancelslot");
  }
  return (
    <>
      <h1>{`Hi ${loggedin.name.toUpperCase()}`}</h1>
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
            action={handlebookaslot}
            text="Book a Slot"
            color="primary"
          />

          <ButtonHelper
            variant="contained"
            action={handlecancelaslot}
            text="Cancel a Slot"
            color="error"
          />
        </Stack>
      </Grid>
    </>
  );
}
