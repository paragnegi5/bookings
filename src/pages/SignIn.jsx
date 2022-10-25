import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import ButtonHelper from "../components/ButtonHelper";

function SignIn({ setIsloggedin }) {
  let history = useNavigate();
  const [empid, setEmpid] = useState();
  const [password, setPassword] = useState();
  const handlesignin = () => {
    if (!empid || !password) {
      alert("Employee Id or Password cannot be empty");
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
      let validuser = users.filter((e) => {
        if (e.empid === empid) {
          return e;
        }
      });
      if (validuser.length === 0) {
        alert("Invalid ID or Password");
      } else {
        if (
          validuser[0].empid === empid &&
          validuser[0].password === password
        ) {
          let loggedin = JSON.parse(localStorage.getItem("loggedin"));
          loggedin = {
            ...loggedin,
            empid: empid,
            name: validuser[0].name,
            isloggedin: true,
          };
          localStorage.setItem("loggedin", JSON.stringify(loggedin));
          setIsloggedin(true);
          history("/homepage");
        } else {
          alert("Invalid Password");
        }
      }
      console.log(validuser);
    }
  };

  const handleacnumchange = (e) => {
    setEmpid(e.target.value);
  };

  const handlepasschange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Grid container direction="column" alignItems="center" height="100vh">
      <h1 style={{ marginTop: "50px" }}>Login</h1>
      <TextField
        required
        id="outlined-number-input"
        label="Employee Id"
        type="number"
        style={{ margin: "40px", width: "350px" }}
        onKeyUp={(e) => handleacnumchange(e)}
      />

      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        style={{ margin: "40px", width: "350px" }}
        onKeyUp={(e) => handlepasschange(e)}
      />

      <Stack direction="row" spacing={2}>
        <ButtonHelper
          variant="contained"
          color="success"
          style={{ marginTop: "50px", width: "150px", height: "45px" }}
          action={handlesignin}
          text="SignIn"
        />
      </Stack>
    </Grid>
  );
}

export default SignIn;
