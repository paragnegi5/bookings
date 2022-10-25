import React, { useState } from "react";
import Booking from "./CancelSlotHelper";

export default function CancelSlot() {
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));
  let slots = JSON.parse(localStorage.getItem("employees"));
  let bookedslots = JSON.parse(localStorage.getItem("bookedslots"));
  const [isdelete, setIsdelete] = useState(true);

  function onDelete(s) {
    let slotindex = slots[bookedslots[s]].indexOf(s);
    slots[bookedslots[s]].splice(slotindex, 1);
    delete bookedslots[s];
    localStorage.setItem("bookedslots", JSON.stringify(bookedslots));
    localStorage.setItem("employees", JSON.stringify(slots));
    setIsdelete(!isdelete);
  }

  return slots === null ||
    slots === undefined ||
    (slots &&
      (slots[loggedin.empid] === undefined ||
        slots[loggedin.empid] === null ||
        slots[loggedin.empid].length === 0)) ? (
    <h1>You have no bookings</h1>
  ) : (
    <>
      <h1>Bookings</h1>

      {slots[loggedin.empid].map((slot) => {
        return <Booking slot={slot} onDelete={onDelete} />;
      })}
    </>
  );
}
