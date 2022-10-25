import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SearchAppBar(props) {
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));
  let history = useNavigate();
  const handlelogin = () => {
    history("/signin");
  };

  const handlelogout = () => {
    loggedin.isloggedin = false;
    loggedin.empid = null;
    loggedin.name = null;
    localStorage.setItem("loggedin", JSON.stringify(loggedin));
    history("/");
    window.location.reload();
  };

  const handlemui = () => {
    if (loggedin?.isloggedin) {
      history("/homepage");
    } else {
      history("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "rgb(50, 50, 50)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={handlemui}
          >
            Home
          </Typography>
          {!loggedin?.isloggedin ? (
            <Button color="inherit" onClick={handlelogin}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handlelogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
