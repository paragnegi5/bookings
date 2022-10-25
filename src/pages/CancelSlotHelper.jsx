import React from "react";
import ButtonHelper from "../components/ButtonHelper";
export default function Booking({ slot, onDelete }) {
  let arr = slot.split("$");
  let venue = arr[0];
  let datetime = arr[1];
  console.log(venue);
  return (
    <>
      <p>
        <b> Venue </b>: {venue} &emsp; <b>Date & Time </b>: {datetime}
      </p>
      <ButtonHelper
        variant="contained"
        color="error"
        style={{ marginTop: "50px", width: "150px", height: "45px" }}
        action={() => {
          onDelete(slot);
        }}
        text="Cancel Booking"
      />
    </>
  );
}
