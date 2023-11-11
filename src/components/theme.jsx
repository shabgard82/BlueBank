import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#317fe3",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#fff",
      main: "#000",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    success: {
      main: "#66CD6A",
    },
    info: {
      light: "#eee",
      main: "#ddd",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#333",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1,
            py: 0.25,
            borderRadius: 1,
          }),
        icon: ({ theme }) =>
          theme.unstable_sx({
            mr: 0.5,
            ml: "-2px",
          }),
      },
    },
  },
});

export default theme;
