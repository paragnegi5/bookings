import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";

export default function DateTimepicker(props) {
  const [value, setValue] = React.useState(dayjs().format());
  const { setDatetime } = props;

  const handleChange = (newValue) => {
    setValue(newValue);
    setDatetime(dayjs().format());
    setDatetime(moment(newValue.$d).format("MMMM Do YYYY, h:mm a"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ marginRight: "20px", width: "70%" }}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
