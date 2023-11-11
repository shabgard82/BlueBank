import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  {
    label: "Includes English lowercase and uppercase letters",
  },
  {
    label: "Contains at least 8 characters",
  },
  {
    label: "including the number",
  },
];

export default function VerticalLinearStepperPass() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
