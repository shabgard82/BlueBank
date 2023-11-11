import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import { Stack } from "@mui/material";

function DatepickerExample() {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    alert("Selected date is: " + date);
  };

  return (
    <Stack >
      {/* <button onClick={() => datePickerRef.current.open()}></button> */}
      <DatePicker
      className={styles.input}
        selected={selectedDate}
        onChange={handleDateChange}
        ref={datePickerRef}
        dateFormat="yyyy-MM-dd"
        placeholderText="yyyy-MM-dd"
        
      />
    </Stack>
  );
}

export default DatepickerExample;
