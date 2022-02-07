// FILE NOT IN USE/ FOR FUTURE DEV

import React, { useState } from "react";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const DatePicker = () => {
  const [datePicked, setDatePicked] = useState(new Date());
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <ThemeProvider theme={materialTheme}> */}

        <MobileDatePicker
          label="Check progress"
          value={datePicked}
          onChange={(newDatePicked) => {
            setDatePicked(newDatePicked);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        {/* </ThemeProvider> */}
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
