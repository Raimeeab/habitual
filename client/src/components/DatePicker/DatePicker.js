import React, { useState } from "react";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const DatePicker = () => {
  const [datePicked, setDatePicked] = useState();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Check progress"
          value={datePicked}
          onChange={(newDatePicked) => {
            setDatePicked(newDatePicked);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
