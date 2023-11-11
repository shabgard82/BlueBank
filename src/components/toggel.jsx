import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function BasicSwitches() {
  return (
    <div>
      <Switch {...label} />
    </div>
  );
}
export default BasicSwitches;
