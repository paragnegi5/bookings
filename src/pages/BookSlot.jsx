import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateTimepicker from "../components/DateTimepicker";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ButtonHelper from "../components/ButtonHelper";

export default function BookSlot(props) {
  let history = useNavigate();
  const [datetime, setDatetime] = useState(null);
  const [state, setState] = useState(null);
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));
  function handlebooking() {
    if (!state || !datetime) {
      alert("State and Date Time cannot be null");
    } else {
      let bookedslots = JSON.parse(localStorage.getItem("bookedslots"));
      let employees = JSON.parse(localStorage.getItem("employees"));
      if (!bookedslots) {
        bookedslots = {};
        employees = {};
      }
      let curslot = `${state} $ ${datetime}`;
      if (curslot in bookedslots) {
        alert("This slot is already booked");
      } else {
        bookedslots[curslot] = loggedin.empid;
        console.log(loggedin.empid);
        if (!(loggedin.empid in employees)) {
          employees[loggedin.empid] = [];
        }
        console.log(employees);
        employees[loggedin.empid].push(curslot);
        localStorage.setItem("bookedslots", JSON.stringify(bookedslots));
        localStorage.setItem("employees", JSON.stringify(employees));
        history("/homepage");
        alert("Booking Successful");
      }
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop="100px"
        marginBottom="100px"
      >
        <DateTimepicker setDatetime={setDatetime} />
        <Dropdown setState={setState} />
      </Grid>
      <ButtonHelper
        variant="contained"
        color="success"
        style={{ marginTop: "50px", width: "150px", height: "45px" }}
        action={handlebooking}
        text="Book"
      />
    </>
  );
}
