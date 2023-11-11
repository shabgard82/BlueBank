import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function HelperText() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          border: "solid 2px #4d94ff",
          borderRadius: "14px",
          padding: "0px 2x",
          backgroundColor: "#d3eaf2",
          outline:'none',
        }}
      />
    </LocalizationProvider>
  );
}
