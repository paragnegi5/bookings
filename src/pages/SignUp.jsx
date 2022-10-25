import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import ButtonHelper from "../components/ButtonHelper";

function SignUp({ setIsloggedin }) {
  let history = useNavigate();
  const [empid, setEmpid] = useState(0);
  const [password, setPassword] = useState(0);
  const [name, setName] = useState("");
  const handlesignup = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) {
      users = [];
    }
    let newuser = { empid: empid, name: name, password: password };
    users = [...users, newuser];
    localStorage.setItem("users", JSON.stringify(users));
    let loggedin = JSON.parse(localStorage.getItem("loggedin"));
    loggedin = { ...loggedin, empid: empid, name: name, isloggedin: true };
    localStorage.setItem("loggedin", JSON.stringify(loggedin));
    setIsloggedin(true);
    history("/homepage");
  };

  const handleacnumchange = (e) => {
    setEmpid(e.target.value);
  };

  const handlepasschange = (e) => {
    setPassword(e.target.value);
  };
  const handlenamechange = (e) => {
    setName(e.target.value);
  };

  return (
    <Grid container direction="column" alignItems="center" height="100vh">
      <h1 style={{ marginTop: "50px" }}>SignUp</h1>
      <TextField
        id="outlined-text-input"
        label="Employee Name"
        type="text"
        style={{ margin: "40px", width: "350px" }}
        onKeyUp={(e) => handlenamechange(e)}
      />
      <TextField
        id="outlined-number-input"
        label="Employee Id"
        type="number"
        style={{ margin: "40px", width: "350px" }}
        onKeyUp={(e) => handleacnumchange(e)}
      />

      <TextField
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
          style={{ marginTop: "50px", width: "150px", height: "45px" }}
          action={handlesignup}
          text="SignUp"
          color="primary"
        />
      </Stack>
    </Grid>
  );
}

export default SignUp;
