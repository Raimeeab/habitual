import React, { useState } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
// import styled from "styled-components"; 
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

// const materialTheme = createTheme({
//   overrides: {
//       MuiPickersToolbar: {
//           toolbar: {
//               backgroundColor: "#8bc34a",
//           },
//       },
//       MuiPickersCalendarHeader: {
//           switchHeader: {
//               backgroundColor: "white",
//               color: "#1b5e20",
//           },
//       },
//   },
// });

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
